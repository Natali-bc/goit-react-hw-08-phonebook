import React from 'react';
import { connect } from 'react-redux';
import UserMenu from './components/UserMenu/UserMenu';
import NavBar from './components/NavBar/NavBar';
import AuthNav from './components/AuthNav/AuthNav';
import { isAuthenticated } from './redux/auth/authSelectors';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <NavBar />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
