import React from 'react';
import PropTypes from 'prop-types';

import GenderMaleOutlineIcon from '../../Icons/GenderMaleOutlineIcon/GenderMaleOutlineIcon';
import Card from '../Card';

function GenderMaleCard({ onClick, currentGender }) {
  const label = 'male';
  return (
    <Card
      id="card-male"
      Icon={GenderMaleOutlineIcon}
      label={label}
      color="blue"
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

GenderMaleCard.propTypes = {
  onClick: PropTypes.func,
  currentGender: PropTypes.string,
};

GenderMaleCard.defaultProps = {
  onClick: undefined,
  currentGender: '',

};

export default GenderMaleCard;
