'use strict';

const authEvents = require('./auth/events.js');
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


$(() => {
  authEvents.addHandlers();
  // profileEvents.addHandlers();
  $('body').css({"visibility": "visible"});
  $('#open-sign-in').modal('show');
});
