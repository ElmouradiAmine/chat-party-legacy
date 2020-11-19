import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { themeSelector } from '../../../features/chat/chatSlice';

import { ReactComponent as Icon } from '../../../assets/svgs/alert.svg';

function AlertIcon({ className, onClick }) {
  const theme = useSelector(themeSelector);

  return (
    <Icon fill={theme === 'dark' ? 'white' : 'black'} className={className} data-testid="icon" onClick={onClick} opacity="0.5" display="block" />
  );
}

AlertIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

AlertIcon.defaultProps = {
  className: '',
  onClick: undefined,
};

export default AlertIcon;
