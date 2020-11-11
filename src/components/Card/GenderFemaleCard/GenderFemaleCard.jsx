import React from 'react';
import PropTypes from 'prop-types';

import GenderFemaleOutlineIcon from '../../Icons/GenderFemaleOutlineIcon/GenderFemaleOutlineIcon';
import Card from '../Card';

function GenderFemaleCard({ onClick, currentGender }) {
  const label = 'female';
  return (
    <Card
      id="card-female"
      Icon={GenderFemaleOutlineIcon}
      label={label}
      color="pink"
      selected={currentGender === label}
      onClick={() => onClick(label)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onClick(label);
        }
      }}
    />
  );
}

GenderFemaleCard.propTypes = {
  onClick: PropTypes.func,
  currentGender: PropTypes.string,
};

GenderFemaleCard.defaultProps = {
  onClick: undefined,
  currentGender: '',
};

export default GenderFemaleCard;
