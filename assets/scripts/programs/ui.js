'use strict';

const programTemplate = require('../templates/programs/programs.handlebars');
const cohortEvents = require('../cohorts/events.js');

const showProgramsSuccess = (programs) => {
  cohortEvents.getCohorts();
  $('#programs-container').html(programTemplate(programs));
  $('.add-profile-button').on('click', function() {
    $('#open-add-profile').modal('show');
  });
};

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  success,
  failure,
  showProgramsSuccess
};
