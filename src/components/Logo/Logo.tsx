import React from 'react';

import logo from '../../assets/img/logo.png';

import './Logo.css';

interface Props {
  className?: string;
}
const Logo: React.FC<Props> = ({ className = '' }) => (
  <figure className={`logo ${className}`}>
    <img src={logo} alt="logo chat-pary linux penguin" className="logo__image" />
    <h1 className="logo__title">
      Chat
      <span className="logo__title--colored">
        Party
      </span>
      <sub className="logo__version">v4.0.0</sub>
    </h1>
  </figure>
);

export default Logo;
