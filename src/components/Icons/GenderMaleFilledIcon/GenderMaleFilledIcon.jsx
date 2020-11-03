import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Icon } from '../../../assets/svgs/gender-male-filled.svg';

function GenderMaleFilledIcon({ className, color }) {
  return (
    <Icon fill={color} className={className} data-testid="icon" />
  );
}

GenderMaleFilledIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

GenderMaleFilledIcon.defaultProps = {
  className: '',
  color: null,
};

export default GenderMaleFilledIcon;
