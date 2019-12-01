import React from 'react';
import PropTypes from 'prop-types';
import './SelectAllInput.css';

const SelectAllInput = ({ value }) => {
  const handleFocus = (event) => event.target.select();

  return (
    <input
      className="select-all-input"
      type="text"
      value={value}
      onFocus={handleFocus}
      readOnly
    />
  );
};

export default SelectAllInput;

SelectAllInput.propTypes = {
  value: PropTypes.string,
};

SelectAllInput.defaultProps = {
  value: null,
};
