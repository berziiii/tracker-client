'use strict';

// const profiles = require('./events.js');
const profileTemplate = require('../templates/profiles/profile.handlebars');
const profileUpdateTemplate = require('../templates/profiles/updateProfile.handlebars');
const adminTemplate = require('../templates/profiles/admin.handlebars');
// const programTemplate = require('../templates/programs/programs.handlebars');

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


// const bookListingTemplate = require('../templates/book-listing.handlebars');
// const books = (books) => {
//   if (books) {
//       $('.content').append(bookListingTemplate(books));
//     }
// };

module.exports = {
  success,
  failure,
  showProfileSuccess,
  showAdminSuccess,
  createProfileSuccess,
  createProfileFailure
};
