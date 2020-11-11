import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/gender-female-filled.svg';

function GenderFemaleFilledIcon({ className, color }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" />
  );
}

GenderFemaleFilledIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

GenderFemaleFilledIcon.defaultProps = {
  className: '',
  color: null,
};

export default GenderFemaleFilledIcon;
