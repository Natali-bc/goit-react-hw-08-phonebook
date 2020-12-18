import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('REGISTER_REQUEST');
const registerSuccess = createAction('REGISTER_SUCCESS');
const registerError = createAction('REGISTER_ERROR');

const loginRequest = createAction('LOGIN_REQUEST');
const loginSuccess = createAction('LOGIN_SUCCESS');
const loginError = createAction('LOGIN_ERROR');

const logoutRequest = createAction('LOGOUT_REQUEST');
const logoutSuccess = createAction('LOGOUT_SUCCESS');
const logoutError = createAction('LOGOUT_ERROR');

const getCurrentUserRequest = createAction('REGISTER_REQUEST');
const getCurrentUserSuccess = createAction('REGISTER_SUCCESS');
const getCurrentUserError = createAction('REGISTER_ERROR');

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};