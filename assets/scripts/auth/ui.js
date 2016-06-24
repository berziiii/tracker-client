'use strict';

const app = require('../app.js');
const profiles = require('../profiles/events.js');

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
  // app.user = data.user;
  $('#open-sign-up').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;

  if (app.user.admin === true) {
    profiles.userProfile(app.user.profile);
    $('#nav-sign-up').removeClass('hide');
    $('#open-sign-in').modal('hide');
    $('#sign-in-footer').addClass('hide');
    $('.main-container').removeClass('hide');
  } else if (app.user.admin !== true && app.user.profile === null) {
    $('#open-create-profile').modal('show');
  } else {
    profiles.userProfile(app.user.profile);
    $('#nav-sign-up').addClass('hide');
    $('#open-sign-in').modal('hide');
    $('#sign-in-footer').addClass('hide');
    $('.main-container').removeClass('hide');
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
  app.user = null;
};

const changePasswordSuccess = () => {
  $('#open-change-password').modal('hide');
  $('#cp-footer').addClass('hide');
};

const changePasswordFailure = () => {
  $('#cp-footer').removeClass('hide');
  $('#cp-footer').html(
    '<div class="alert alert-danger alert-dismissible">Whoops! Something went wrong. Try resetting your password again.</div>'
  );
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
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signUpSuccess
};
