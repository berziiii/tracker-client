'use strict';
//
// // Require files for events to work
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const app = require('../app.js');
// const authUi = require('../auth/ui');

// // Event handlers for authentication
const userProfile = (profile) => {
  api.showProfile(profile)
  .done(ui.showProfileSuccess)
  .fail(ui.failure);
};

const adminProfile = (profile) => {
  api.showProfile(profile)
  .done(ui.showAdminSuccess)
  .fail(ui.failure);
};

const allProfiles = () => {
  api.getAllProfiles()
  .done(ui.sort)
  .fail(ui.failure);
};

// const getPrograms = () => {
//   api.showPrograms()
//   .done(ui.showProgramsSuccess)
//   .fail(ui.failure);
// };

const onCreateProfile = (event) => {
  event.preventDefault();
  let user_id = app.user.id;
  $('#create-profile-user-id').val(user_id);
  let data = getFormFields(event.target);
  api.createProfile(data)
  .done(ui.createProfileSuccess)
  .fail(ui.createProfileFailure);
};

const onUpdateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createProfile(data)
  .done(ui.createProfileSuccess)
  .fail(ui.createProfileFailure);
};

$('#create-profile').on('submit', onCreateProfile);
$('#update-profile').on('submit', onUpdateProfile);


module.exports = {
  userProfile,
  adminProfile,
  allProfiles,
  // getPrograms,
  onCreateProfile,
  onUpdateProfile,
};
