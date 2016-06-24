'use strict';

// const profiles = require('./events.js');
const profileTemplate = require('../templates/profiles/profile.handlebars');

const showProfileSuccess = (profile) => {
  $('#profile-container').html(profileTemplate(profile));
};

const createProfileSuccess = (profile) => {
  $('#open-create-profile').modal('hide');
  $('#profile-footer').addClass('hide');
  $('#open-sign-in').modal('hide');
  $('.main-container').removeClass('hide');
  $('#nav-sign-up').addClass('hide');
  $('#profile-container').html(profileTemplate(profile));
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
  createProfileSuccess,
  createProfileFailure
};
