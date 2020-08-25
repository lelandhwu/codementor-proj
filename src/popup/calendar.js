import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import luxonPlugin from '@fullcalendar/luxon';
import { DateTime } from 'luxon';
import moment from 'moment';

import { INITIAL_EVENTS, createEventId, createAvailabilityId } from './event-utils';
import { Token, AuthCode, CalendarRequest } from './availabilityguide/availabilityguide_pb';
import { AvailabilityGuideClient } from './availabilityguide/availabilityguide_grpc_web_pb';

const browser = require('webextension-polyfill');
const bkg = chrome.extension.getBackgroundPage();

// color constants
const availColor = '#6dbcfc';
const eventColor = 'darkgrey';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  created: function() {
    this.client = new AvailabilityGuideClient('http://localhost:8080', null, null);
  },
  mounted: async function() {
    const token = await this.getAccessToken(false);
    const events = await this.getGoogleEvents(token);
    const calendarApi = this.$refs.fullCalendar.getApi();
    calendarApi.addEventSource(events);
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, luxonPlugin],
        timeZone: 'local',
        headerToolbar: {
          left: 'prev',
          center: 'title',
          right: 'next',
        },
        titleFormat: { year: 'numeric', month: 'long' },
        initialView: 'timeGridWeek',
        initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        dayHeaderFormat: { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true },
        dayHeaderContent: args => {
          let date = args.date.toString();
          let day = date.substr(0, 1);
          let day_num = date.substr(8, 2);
          let headerString = day + ' \n ' + day_num;
          return headerString;
        },
        slotDuration: '00:05:00',
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        eventMouseEnter: this.handleMouseEnter,
        eventMouseLeave: this.handleMouseLeave,
        eventResizableFromStart: true,
        aspectRatio: 1,
        slotLabelInterval: { hours: 1 },
        allDaySlot: true,
        scrollTime: '08:55:00',
        selectable: true,
        eventTimeFormat: {
          hour: 'numeric',
          minute: '2-digit',
          meridiem: false,
          omitZeroMinute: true,
        },
        firstDay: 1,
      },
      timeZone: 'local',
      currentEvents: [],
      availabilities: [],
      isLoading: false,
      noValidToken: false,
    };
  },
  methods: {
    async signIn() {
      console.log('SIGNING');
      const token = await this.getAccessToken(true);

      console.log('token', token);
      const events = await this.getGoogleEvents(token);
      const calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.addEventSource(events);
    },

    // revoke token is used for sign out but unused except for debugging
    revokeToken() {
      chrome.identity.getAuthToken({ interactive: false }, function(current_token) {
        if (!chrome.runtime.lastError) {
          chrome.identity.removeCachedAuthToken({ token: current_token }, function() {});

          const xhr = new XMLHttpRequest();
          xhr.open('GET', `https://accounts.google.com/o/oauth2/revoke?token=${current_token}`);
          xhr.send();
          this.noValidToken = true;
        }
      });
    },

    async getGoogleEvents(accessToken) {
      if (accessToken === undefined) {
        this.noValidToken = true;
        return [];
      }

      this.noValidToken = false;
      const token = new Token();
      token.setAccesstoken(accessToken);

      const calRequest = new CalendarRequest();
      calRequest.setToken(token);

      const response = await this.getEventsList(calRequest, {});
      const googleEvents = response.getEventsList();

      let initialEvents = [];
      googleEvents.forEach(event => {
        let startDate = event
          .getStart()
          .toDate()
          .toISOString();

        let endDate = null;
        let allDay = false;
        let display = 'background';

        if (event.getEnd()) {
          endDate = event
            .getEnd()
            .toDate()
            .toISOString();
        } else {
          allDay = true;
          display = null;
        }

        let newEvent = {
          id: 'G' + createEventId(),
          title: event.getSummary(),
          start: startDate,
          end: endDate,
          editable: false,
          backgroundColor: eventColor,
          borderColor: eventColor,
          allDay: allDay,
          display: display,
        };

        initialEvents.push(newEvent);
      });

      return initialEvents;
    },
    getAccessToken(interactive) {
      return new Promise(function(resolve, reject) {
        browser.identity.getAuthToken({ interactive: interactive }, token => {
          resolve(token);
        });
      });
    },
    getEventsList(calRequest) {
      let client = this.client;
      return new Promise(function(resolve, reject) {
        client.list(calRequest, {}, (err, response) => {
          if (response) {
            resolve(response);
          } else {
            resolve(err);
          }
        });
      });
    },

    handleDateSelect(selectInfo) {
    },
    handleEventClick(clickInfo) {
      console.log('INFO', clickInfo.event.id);
      if (clickInfo.event.id[0] == 'A') {
        // var popup = document.getElementById('myalert');
        // popup.classList.remove('show');
        clickInfo.event.remove();
      }
    },
    handleEvents(events) {
      console.log('FIRST EVENTS!!!', events, this.timeZone);
      this.currentEvents = events;
      this.availabilities = events.filter(e => e.backgroundColor == availColor);
    },
    handleInitialEvents(info, succ, err) {},
  },
};
