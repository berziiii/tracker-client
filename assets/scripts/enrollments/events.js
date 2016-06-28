'use strict';
//
// // Require files for events to work
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onAddEnrollee = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addEnrollee(data)
  .done(ui.addEnrolleeSuccess)
  .fail(ui.addEnrolleeFailure);
};

// const removeEnrollee = (cohort_id, profile_id) => {
//
// };

const addHandlers = () => {
  $('#add-enrollee-to-cohort').on('submit', onAddEnrollee);
};

module.exports = {
  addHandlers,
  onAddEnrollee
};
