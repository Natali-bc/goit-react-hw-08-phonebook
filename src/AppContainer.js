import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { getCurrentUser } from './redux/auth/authOperations';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return <App {...this.props} />;
  }
}

export default connect(null, { onGetCurrentUser: getCurrentUser })(
  AppContainer,
);
