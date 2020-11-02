import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.png';
import './Logo.css';

const Logo = ({ className }) => (
  <figure className={`logo ${className}`}>
    <img
      src={logo}
      alt="logo chat-pary linux penguin"
      className="logo__image"
    />
    <h1 className="logo__title">
      Chat
      <span className="logo__title--colored">Party</span>
      <sub className="logo__version">v4.0.0</sub>
    </h1>
  </figure>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
