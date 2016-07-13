'use strict';

const app = require('../app.js');
const profiles = require('../profiles/events.js');
const programs = require('../programs/events.js');

// View State Functions

const adminViewState = () => {
  $('#nav-sign-up').removeClass('hide');
  $('#open-sign-in').modal('hide');
  $('#sign-in-footer').addClass('hide');
  $('.main-container').removeClass('hide');
  $('#add-enrollee').removeClass('hide');
};

const userViewState = () => {
  $('#nav-sign-up').addClass('hide');
  $('#open-sign-in').modal('hide');
  $('#sign-in-footer').addClass('hide');
  $('.main-container').removeClass('hide');
  $('#programs-container').html('');
  $('#add-enrollee').addClass('hide');
};

// UI functions from api requests
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

const signUpSuccess = () => {
  $('#open-sign-up').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;

  if (app.user.admin === true) {
    profiles.adminProfile(app.user.profile);
    programs.getPrograms();
    adminViewState();
  } else if (app.user.admin !== true && app.user.profile === null) {
    $('#open-create-profile').modal('show');
  } else {
    profiles.userProfile(app.user.profile);
    userViewState();
  }
};

const signInFailure = () => {
  $('#sign-in-footer').removeClass('hide');
  $('#sign-in-footer').html(
    '<div class="alert alert-danger alert-dismissible">Whoops! Something went wrong, please try signing in again.</div>'
  );
};

const signOutSuccess = () => {
  $('#open-sign-in').modal('show');
  $('.main-container').addClass('hide');
  $('#programs-container').html('');
  app.user = null;
};

const changePasswordSuccess = () => {
  $('#open-change-profile').modal('hide');
  $('#cp-footer').addClass('hide');
};

const changePasswordFailure = () => {
  $('#cp-footer').removeClass('hide');
  $('#cp-footer').html(
    '<div class="alert alert-danger alert-dismissible">Whoops! Something went wrong. Try resetting your password again.</div>'
  );
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signUpSuccess
};
