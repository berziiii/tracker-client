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
  debugger;
  api.showProfile(profile)
  .done(ui.showProfileSuccess)
  .fail(ui.failure);
};

const onCreateProfile = (event) => {
  event.preventDefault();
  let user_id = app.user.id;
  $('#create-profile-user-id').val(user_id);
  let data = getFormFields(event.target);
  api.createProfile(data)
  .done(ui.createProfileSuccess)
  .fail(ui.createProfileFailure);
};

$('#create-profile').on('submit', onCreateProfile);
// //
// // const onSignOut = (event) => {
// //   event.preventDefault();
// //   api.signOut()
// //   .done(ui.signOutSuccess)
// //   .fail(ui.failure);
// // };
// //

// const addHandlers = () => {
//   $('#create-profile').on('submit', onCreateProfile);
// };


module.exports = {
  // addHandlers,
  userProfile,
  onCreateProfile
};
