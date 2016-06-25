'use strict';
//
// // Require files for events to work
// const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
// const app = require('../app.js');
// const authUi = require('../auth/ui');

const getCohorts = () => {
  api.showCohorts()
  .done(ui.showCohortsSuccess)
  .fail(ui.failure);
};


module.exports = {
  getCohorts,
};
