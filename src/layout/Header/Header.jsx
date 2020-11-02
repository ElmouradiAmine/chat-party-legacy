import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';

import './Header.css';

const Header = ({ className }) => (
  <header className={`header ${className}`}>
    <div className="header__content">
      <Logo className="header__logo" />
    </div>
  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
