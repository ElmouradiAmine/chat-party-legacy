import React from 'react';
import PropTypes from 'prop-types';

import GenderFemaleOutlineIcon from '../../Icons/GenderFemaleOutlineIcon/GenderFemaleOutlineIcon';
import Card from '../Card';

function GenderFemaleCard({ selected, onClick, onKeyPress }) {
  return (
    <Card
      id="card-female"
      Icon={GenderFemaleOutlineIcon}
      label="female"
      color="pink"
      selected={selected}
      onClick={onClick}
      onKeyPress={onKeyPress}
    />
  );
}

GenderFemaleCard.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
};

GenderFemaleCard.defaultProps = {
  selected: false,
  onClick: undefined,
  onKeyPress: undefined,
};

export default GenderFemaleCard;
