'use strict';

const app = require('../app.js');

const showPrograms = () => {
  return $.ajax({
    url: app.host + '/programs',
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};

module.exports = {
  showPrograms
};
