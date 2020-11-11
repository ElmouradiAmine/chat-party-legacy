import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

function Card({
  Icon,
  label,
  color,
  selected,
  className,
  onClick,
  onKeyPress,
  tabIndex,
  id,
}) {
  return (
    <div
      id={id}
      data-testid={id}
      className={`card ${className} ${color && `card--${color}`} ${
        selected && 'card--selected'
      } `}
      onClick={onClick}
      role="radio"
      tabIndex={tabIndex}
      onKeyPress={onKeyPress}
      aria-checked={selected}
    >
      {Icon && <Icon src={Icon} alt={label} className="card__icon" />}
      <p className="card__label">{label}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  selected: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  tabIndex: PropTypes.number,
};

Card.defaultProps = {
  id: undefined,
  className: '',
  label: 'Card',
  color: undefined,
  selected: false,
  Icon: undefined,
  onClick: undefined,
  onKeyPress: undefined,
  tabIndex: 0,
};

export default Card;
