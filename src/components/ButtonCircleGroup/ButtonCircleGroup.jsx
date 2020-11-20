/* eslint-disable react/prop-types */
import React from 'react';

import './ButtonCircleGroup.css';

import ButtonCircle from './ButtonCircle';

const ButtonCircleGroup = ({ className }) => (
  <div className={`buttonCircleGroup ${className}`}>
    <ButtonCircle color="red" />
    <ButtonCircle color="yellow" />
    <ButtonCircle color="green" />
  </div>
);

export default ButtonCircleGroup;
