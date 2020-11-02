import React from 'react';
import PropTypes from 'prop-types';

import './ConnectionForm.css';

const ConnectionForm = ({ className }) => <div className={`connection-form ${className}`}>ConnectionForm</div>;

ConnectionForm.propTypes = {
  className: PropTypes.string,
};

ConnectionForm.defaultProps = {
  className: '',
};

export default ConnectionForm;
