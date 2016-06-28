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

module.exports = {
  addEnrollee,
};
