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

const getCohortProfiles = (cohort_id) => {
  return $.ajax({
    url: app.host + '/cohorts/' + cohort_id,
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};

module.exports = {
  showCohorts,
  getCohortProfiles
};
