import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
  type, className, placeholder, onChange, value, max, maxLength, onKeyDown,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`input ${className}`}
    onChange={onChange}
    value={value}
    max={max}
    maxLength={maxLength}
    onKeyDown={(event) => {
      if (event.key === 'Enter') {
        onKeyDown();
      }
    }}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  onKeyDown: PropTypes.func,

};

Input.defaultProps = {
  className: '',
  type: 'text',
  placeholder: '',
  value: undefined,
  onChange: null,
  max: undefined,
  maxLength: undefined,
  onKeyDown: undefined,
};
export default Input;
