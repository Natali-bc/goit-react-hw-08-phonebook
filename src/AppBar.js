import React from 'react';
import { connect } from 'react-redux';
import UserMenu from './components/UserMenu/UserMenu';
import NavBar from './components/NavBar/NavBar';
import { isAuthenticated } from './redux/auth/authSelectors';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

const AppBar = ({ isAuthenticated }) => (
  <header>
    <NavBar />
    {isAuthenticated && <UserMenu />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
