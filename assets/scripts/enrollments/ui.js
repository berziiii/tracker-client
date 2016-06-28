'use strict';

const cohortEvents = require('../cohorts/events.js');

const addEnrolleeSuccess = () => {
  cohortEvents.getCohorts();
  $('#open-add-profile').modal('hide');
};

const addEnrolleeFailure = (error) => {
  console.log(error);
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
  addEnrolleeSuccess,
  addEnrolleeFailure
};
