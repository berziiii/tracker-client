'use strict';

const cohortTemplate = require('../templates/cohorts/cohorts.handlebars');
const profileEvents = require('../profiles/events.js');
// const addProfileToCohortTemplate = require('../templates/cohorts/cohort-modal.handlebars');

// UI for api requests

const showCohortsSuccess = (cohorts) => {
  profileEvents.allProfiles();
  $('#show-enrollments').html(cohortTemplate(cohorts));
  $('#delete-account').on('click', function () {
    $('#open-remove-account').modal('show');
  });
};
//
// const getCohortsSuccess = (cohorts) => {
//   $('#add-profile').html(addProfileToCohortTemplate(cohorts));
// };


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
  showCohortsSuccess,
  // getCohortsSuccess,
};
