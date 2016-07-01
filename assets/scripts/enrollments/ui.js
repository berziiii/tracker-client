'use strict';

const cohortEvents = require('../cohorts/events.js');
const api = require('./api.js');
const cohortUi = require('../cohorts/ui.js');

const failure = (error) => {
  console.error(error);
};

const addEnrolleeSuccess = () => {
  // cohortEvents.getCohorts();
  $('#open-add-profile').modal('hide');
};

const addEnrolleeFailure = (error) => {
  console.log(error);
};

const deleteEnrolleeSuccess = () => {
  console.log('deleted successfully');
  // cohortUi.
};

const findEnrolleeSuccess = (data) => {
  let enrollee = data.enrollments[0];
  api.deleteEnrollee(enrollee)
  .done(deleteEnrolleeSuccess)
  .fail(failure);
};

// const success = (data) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log('Success');
//   }
// };

module.exports = {
  // success,
  failure,
  addEnrolleeSuccess,
  addEnrolleeFailure,
  findEnrolleeSuccess,
  deleteEnrolleeSuccess
};
