import React from 'react';
import PropTypes from 'prop-types';

import GenderMaleOutlineIcon from '../../Icons/GenderMaleOutlineIcon/GenderMaleOutlineIcon';
import Card from '../Card';

function GenderMaleCard({ selected, onClick, onKeyPress }) {
  return (
    <Card
      id="card-male"
      Icon={GenderMaleOutlineIcon}
      label="male"
      color="blue"
      selected={selected}
      onClick={onClick}
      onKeyPress={onKeyPress}
    />
  );
}

GenderMaleCard.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
};

GenderMaleCard.defaultProps = {
  selected: false,
  onClick: undefined,
  onKeyPress: undefined,
};

export default GenderMaleCard;
