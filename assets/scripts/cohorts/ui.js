'use strict';

const cohortTemplate = require('../templates/programs/cohorts.handlebars');

// UI for api requests

const showCohortsSuccess = (cohorts) => {
  $('#cohorts-container').html(cohortTemplate(cohorts));
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
  showCohortsSuccess
};
