'use strict';

const app = require('../app.js');

const showCohorts = () => {
  return $.ajax({
    url: app.host + '/cohorts',
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};

module.exports = {
  showCohorts
};
