import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
  type, className, placeholder, onChange, value,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`input ${className}`}
    onChange={onChange}
    value={value}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  type: 'text',
  placeholder: '',
  value: '',
  onChange: null,
};
export default Input;
