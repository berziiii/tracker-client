'use strict';

// const profiles = require('./events.js');
const profileTemplate = require('../templates/profiles/profile.handlebars');
const profileUpdateTemplate = require('../templates/profiles/updateProfile.handlebars');
const adminTemplate = require('../templates/profiles/admin.handlebars');
const allProfilesTemplate = require('../templates/profiles/addProfilesTemplate.handlebars');
// const cohortsEvents = require('../cohorts/events.js');

// View State Functions
const userViewState = (profile) => {
  $('#open-create-profile').modal('hide');
  $('#profile-footer').addClass('hide');
  $('#open-sign-in').modal('hide');
  $('.main-container').removeClass('hide');
  $('#nav-sign-up').addClass('hide');
  $('#profile-container').html(profileTemplate(profile));
};

// UI for api requests

const showProfileSuccess = (profile) => {
  $('#profile-container').html(profileTemplate(profile));
  $('#update-profile-form').html(profileUpdateTemplate(profile));
};

const showAdminSuccess = (profile) => {
  $('#profile-container').html(adminTemplate(profile));
  $('#update-profile-form').html(profileUpdateTemplate(profile));
};

const createProfileSuccess = (profile) => {
  userViewState(profile);
};

const createProfileFailure = (error) => {
  $('#profile-footer').removeClass('hide');
  $('#profile-footer').html(
    '<div class="alert alert-danger alert-dismissible">Whoops! Something went wrong, please try again!.</div>'
  );
  console.log(error);
};

const getProfilesSuccess = (list) => {

  $('#add-profile').html(allProfilesTemplate(list));
  
};

const sort = (data) => {
  let list = data;
  list.profiles.sort(function(a, b) {
    let nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  getProfilesSuccess(list);
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

// Click Handlers for profiles
// $('#add-profile-to-cohort').on('click', function() {
//   $('#open-add-profile').modal('show');
// });

module.exports = {
  success,
  failure,
  showProfileSuccess,
  showAdminSuccess,
  createProfileSuccess,
  createProfileFailure,
  getProfilesSuccess,
  sort,
};
