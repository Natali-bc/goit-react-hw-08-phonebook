import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';
import { changeFilter } from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import style from '../../App.module.css';

const Filter = ({ handleChange, filter }) => {
  return (
    <form>
      {' '}
      <label>
        <span className={styles.inputTitle}>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={event => handleChange(event.target.value)}
          className={styles.input}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});
const mapDispatchToProps = {
  handleChange: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
