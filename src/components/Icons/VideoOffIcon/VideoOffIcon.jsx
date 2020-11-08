import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/video-off.svg';

function VideoOffIcon({ className, color, onClick }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" onClick={onClick} />
  );
}

VideoOffIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

VideoOffIcon.defaultProps = {
  className: '',
  color: undefined,
  onClick: undefined,
};

export default VideoOffIcon;
