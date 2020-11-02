import React from 'react';
import PropTypes from 'prop-types';

import './ConnectionForm.css';
import Input from '../../components/Input/Input';

const ConnectionForm = ({ className }) => (
  <form className={`connection-form ${className}`}>
    <Input />
  </form>
);

ConnectionForm.propTypes = {
  className: PropTypes.string,
};

ConnectionForm.defaultProps = {
  className: '',
};

export default ConnectionForm;
