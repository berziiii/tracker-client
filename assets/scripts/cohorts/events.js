'use strict';

// Require files for events to work
// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const getCohorts = () => {
  api.showCohorts()
  .done(ui.showCohortsSuccess)
  .fail(ui.failure);
};

const getAllCohorts = () => {
  api.showCohorts()
  .done(ui.getCohortsSuccess)
  .fail(ui.failure);
};

module.exports = {
  getCohorts,
  getAllCohorts,
};
