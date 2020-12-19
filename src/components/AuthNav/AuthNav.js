import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { connect } from 'react-redux';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = ({ isAuthenticated }) => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
