import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  onClick,
  text,
  style,
  disabled,
  children,
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
    {!children ? <span>{text}</span> : children}
  </div>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'Submit',
  style: {},
  disabled: false,
  children: null,
};
