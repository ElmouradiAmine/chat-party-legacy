import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/facebook.svg';
import './FacebookSquaredIcon.css';

function FacebookSquaredIcon({ className, color }) {
  return (
    <Icon
      fill={color}
      className={`facebook-icon ${className}`}
      data-testid="icon"
      style={{
        width: '2.0rem',
      }}
    />
  );
}

FacebookSquaredIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

FacebookSquaredIcon.defaultProps = {
  className: '',
  color: null,
};

export default FacebookSquaredIcon;
