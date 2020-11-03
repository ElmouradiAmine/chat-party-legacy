import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/gender-female-outline.svg';

function GenderFemaleOutlineIcon({ className, color }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" />
  );
}

GenderFemaleOutlineIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

GenderFemaleOutlineIcon.defaultProps = {
  className: '',
  color: null,
};

export default GenderFemaleOutlineIcon;
