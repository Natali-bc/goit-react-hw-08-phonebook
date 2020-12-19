import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../redux/auth/authSelectors';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
