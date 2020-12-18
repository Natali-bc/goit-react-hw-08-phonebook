import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { getCurrentUser } from './redux/auth/authOperations';
// import PropTypes from 'prop-types';
// import { fetchContact } from '../redux/contacts/operations';
// import { getIsExist, getLoading } from '../redux/contacts/contacts-selectors';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return <App {...this.props} />;
  }
}
// <RegisterPage />
//       <ContactsPage />
export default connect(null, { onGetCurrentUser: getCurrentUser })(
  AppContainer,
);
