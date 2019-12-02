import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  onClick,
  text,
  style,
  disabled,
}) => (
  <div
    className={`cipher-button ${disabled ? 'disabled' : ''}`}
    tabIndex="-2"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    style={style}
    disabled={disabled}
  >
    <span>{text}</span>
  </div>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Submit',
  style: {},
  disabled: false,
};
