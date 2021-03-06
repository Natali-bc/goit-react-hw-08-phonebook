import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import styles from '../components/ContactForm/ContactForm.module.css';
import style from '../App.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className={styles.inputTitle}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.input}
              required
            />
          </label>

          <label>
            <span className={styles.inputTitle}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { onLogin: logIn })(LoginPage);
