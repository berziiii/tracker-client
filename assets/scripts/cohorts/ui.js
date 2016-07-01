'use strict';

const api = require('./api.js');
const cohortTemplate = require('../templates/cohorts/cohorts.handlebars');
const profileEvents = require('../profiles/events.js');
const cohortListTemplate = require('../templates/cohorts/cohortList.handlebars');
const enrollmentEvents = require('../enrollments/events.js');

const getCohortsProfilesSuccess = (data) => {
  let cohort = data.cohort;
  let cohort_id = data.cohort.id;
  $('.show-enrollments').html(' ');
  $('[data-id=' + cohort_id + ']').siblings('.show-enrollments').html(cohortTemplate(cohort));
  $('.remove-enrollee').on('click', function() {
    let profile_id = $(event.target).attr('data-id');
    enrollmentEvents.findEnrollee(cohort_id, profile_id);
  });
};

const showEnrollments = (event) => {
  event.preventDefault();
  let cohort_id = $(event.target).attr('data-id');
  api.getCohortProfiles(cohort_id)
  .done(getCohortsProfilesSuccess)
  .fail();
};

// UI for api requests

const showCohortsSuccess = (data) => {
  let cohortList = data;
  profileEvents.allProfiles();
  $('.enrollments').on('click', showEnrollments);
  $('.show-enrollments').html('');
  // $('.show-enrollments').html(cohortTemplate(cohortList));
  $('#cohort-list-for-profile').html(cohortListTemplate(cohortList));
  // $('#delete-account').on('click', function () {
  //   $('#open-remove-account').modal('show');
  // });
};
//


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
  getCohortsProfilesSuccess
};
