'use strict';

const app = require('../app.js');

const showProfile = (profile) => {
  return $.ajax({
    url: app.host + '/profiles/' + profile.id,
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};

const createProfile = (data) => {
  return $.ajax({
    url: app.host + '/profiles',
    method: "POST",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    data: data,
  });
};

const getAllProfiles = () => {
  return $.ajax({
    url: app.host + '/profiles',
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};

const updateProfile = (data) => {
  return $.ajax({
    url: app.host + '/profiles/' + app.user.id,
    method: "PATCH",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    data: data,
  });
};

module.exports = {
  showProfile,
  updateProfile,
  createProfile,
  getAllProfiles,
};
