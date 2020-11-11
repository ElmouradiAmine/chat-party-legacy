import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/video-on.svg';

function VideoOnIcon({ className, color, onClick }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" onClick={onClick} />
  );
}

VideoOnIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,

};

VideoOnIcon.defaultProps = {
  className: '',
  color: undefined,
  onClick: undefined,
};

export default VideoOnIcon;
