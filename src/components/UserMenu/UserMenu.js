import React from 'react';
import { connect } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.wrapper}>
    <img src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.btn}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => {
  return {
    name: getUserName(state),
    avatar: 'https://icon-library.com/images/22215-dog.ico.ico',
  };
};
export default connect(mapStateToProps, { onLogout: logOut })(UserMenu);
