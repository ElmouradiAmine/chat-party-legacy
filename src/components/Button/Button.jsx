import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import Spinner from '../Spinner/Spinner';

function Button({
  className, label, color, onClick, disabled,
}) {
  return (
    <button
      aria-label={label}
      type="button"
      className={`button button--${color} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {!disabled ? `${label}` : <Spinner /> }
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  label: 'Button',
  onClick: null,
  color: 'green',
  disabled: false,
};

export default Button;
