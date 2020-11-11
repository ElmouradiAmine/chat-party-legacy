import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/gender-male-outline.svg';

function GenderMaleOutlineIcon({ className, color }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" />
  );
}

GenderMaleOutlineIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

GenderMaleOutlineIcon.defaultProps = {
  className: '',
  color: null,
};

export default GenderMaleOutlineIcon;
