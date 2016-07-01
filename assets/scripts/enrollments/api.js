'use strict';

const app = require('../app.js');

const addEnrollee = (data) => {
  return $.ajax({
    url: app.host + '/enrollments',
    method: "POST",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    data: data,
  });
};

const findEnrollee = (cohort_id, profile_id) => {
  return $.ajax({
    url: app.host + '/enrollment/find/',
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    data: {
      "profile_id": profile_id,
      "cohort_id": cohort_id
    }
  });
};

const deleteEnrollee = (enrollee) => {
  return $.ajax({
    url: app.host + '/enrollments/' + enrollee.id,
    method: "DELETE",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      }
  });
};


module.exports = {
  addEnrollee,
  findEnrollee,
  deleteEnrollee
};
