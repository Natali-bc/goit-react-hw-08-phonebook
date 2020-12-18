import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import styles from '../components/ContactForm/ContactForm.module.css';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 4,
//   },
// };

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.registrationForm}>
          <label className={styles.registrationLabel}>
            <span className={styles.inputTitle}>Name</span>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
              required
            />
          </label>
          <label>
            <span className={styles.inputTitle}>Email</span>
            <input
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
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Register
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { onRegister: register })(RegisterPage);
