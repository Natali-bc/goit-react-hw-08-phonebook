import React from 'react';
import { connect } from 'react-redux';
import styles from '../ContactForm/ContactForm.module.css';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.btn}>
      Logout
    </button>
  </div>
);
const mapStatetoProps = state => ({
  name: getUserName(state),
  avatar: 'https://icon-library.com/images/22215-dog.ico.ico',
});
export default connect(mapStatetoProps, { onLogout: logOut })(UserMenu);
