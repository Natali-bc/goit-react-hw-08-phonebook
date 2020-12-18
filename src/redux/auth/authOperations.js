import axios from 'axios';
import {
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
} from '../auth/authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(registerSuccess(response.data));
    })
    .catch(error => dispatch(registerError(error)));
};

const logIn = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch(error => dispatch(loginError(error)));
};
const logOut = () => dispatch => {
  dispatch(logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => dispatch(logoutError(error)));
};
const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(error => getCurrentUserError(error));
};

export { register, logIn, logOut, getCurrentUser };
