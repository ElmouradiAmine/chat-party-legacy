import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/alert.svg';

function AlertIcon({ className, color, onClick }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" onClick={onClick} opacity="0.5" display="block" />
  );
}

AlertIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

AlertIcon.defaultProps = {
  className: '',
  color: undefined,
  onClick: undefined,
};

export default AlertIcon;
