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

const showPrograms = () => {
  return $.ajax({
    url: app.host + '/programs',
    method: "GET",
    headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });
};
// //
// // const signOut = () => {
// //   return $.ajax({
// //     url: app.host + '/sign-out/' + app.user.id,
// //     method: "DELETE",
// //     headers: {
// //       Authorization: 'Token token=' + app.user.token,
// //     },
// //   });
// // };
// //
// // const changePassword = (data) => {
// //   return $.ajax({
// //     url: app.host + '/change-password/' + app.user.id,
// //     method: "PATCH",
// //     headers: {
// //       Authorization: 'Token token=' + app.user.token,
// //     },
// //     data: data,
// //   });
// // };
//
module.exports = {
  showProfile,
  showPrograms,
  createProfile
};
