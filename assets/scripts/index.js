'use strict';

const authEvents = require('./auth/events.js');
const enrollmentEvents = require('./enrollments/events.js');
// const cohortEvents = require('./cohorts/events.js');
// const profileEvents = require('./profiles/events.js');
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// Main event handlebars
$('#nav-sign-up').on('click', function() {
  $('#open-sign-up').modal('show');
});

$('#nav-profile').on('click', function() {
  $('#open-change-profile').modal('show');
});

$('#add-enrollee').on('click', function() {
  $('#open-add-profile').modal('show');
});

$(() => {
  authEvents.addHandlers();
  enrollmentEvents.addHandlers();
  $('body').css({"visibility": "visible"});
  $('#open-sign-in').modal('show');
});
