import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from '../App.module.css';
import PropTypes from 'prop-types';
import { fetchContact } from '../redux/contacts/operations';
import { getIsExist, getLoading } from '../redux/contacts/contacts-selectors';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';
import Notification from '../components/Notification/Notification';
import notificationStyles from '../components/Notification/Notification.module.css';
import Loader from '../components/Loader/Loader';

class ContactsPage extends Component {
  static propTypes = {
    isExists: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    onFetchContact: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.onFetchContact();
  }
  render() {
    const { isLoading, isExists } = this.props;
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        {isLoading && <Loader />}
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <CSSTransition
          in={isExists}
          timeout={250}
          classNames={notificationStyles}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isExists: getIsExist(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = {
  onFetchContact: fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
