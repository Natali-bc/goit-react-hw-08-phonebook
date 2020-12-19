import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { connect } from 'react-redux';
import styles from '../NavBar/NavBar.module.css';

const NavBar = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={styles.link}>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" exact className={styles.link}>
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
