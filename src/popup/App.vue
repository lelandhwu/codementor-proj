<script src="./calendar.js"></script>
<template>
  <div class="demo-app">

    <div class="demo-app-sidebar">
      <div class="demo-app-sidebar-section sidebar-buttons">
        <div class="sign-in">
          <button v-if="noValidToken" v-on:click="signIn">
            Sign In
          </button>
          <!-- uncomment sign out to test sign in -->
          <button v-else v-on:click="revokeToken">
            Sign Out
          </button>
        </div>

        <label class="radio-container" for="EST">
          <input type="radio" id="EST" name="timeZone" value="America/New_York" @change="onChange()" class="form-control" v-model="timeZone" />
          <span class="checkmark">ET</span>
        </label>
        <label class="radio-container" for="CST">
          <input type="radio" id="CST" name="timeZone" value="America/Chicago" @change="onChange()" class="form-control" v-model="timeZone" />
          <span class="checkmark">CT</span>
        </label>
        <label class="radio-container" or="MST">
          <input type="radio" id="MST" name="timeZone" value="America/Denver" @change="onChange()" class="form-control" v-model="timeZone" />
          <span class="checkmark">MT</span>
        </label>
        <label class="radio-container" for="PST">
          <input type="radio" id="PST" name="timeZone" value="America/Los_Angeles" @change="onChange()" class="form-control" v-model="timeZone" />
          <span class="checkmark">PT</span>
        </label>
      </div>

      <div class="demo-app-sidebar-section sidebar-buttons">
        <label for="SS" class="checkbox-container">
          <input type="checkbox" id="SS" name="weekends" @change="handleWeekendsToggle" :checked="calendarOptions.weekends" />
          <span class="checkbox-custom"></span>
          weekends
        </label>
        <span class="checkmark bottom-row-buttons" id="right-buttons" v-on:click="clearEvents">Clear</span>
      </div>

    </div>
  </div>
</template>

<style src="./style/app.css"></style>
