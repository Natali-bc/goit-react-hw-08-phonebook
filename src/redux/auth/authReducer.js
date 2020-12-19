import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
} from '../auth/authActions';

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const errorReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: (_, { payload }) => payload,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
export default combineReducers({
  user: userReducer,
  token,
  error: errorReducer,
});
