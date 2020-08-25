import Vue from 'vue';
import App from './App';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

const gauthOption = {
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
  prompt: 'select_account',
};

Vue.use(Buefy);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
