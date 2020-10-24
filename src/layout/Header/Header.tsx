import React from 'react';

import './Header.css';

export interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className = '' }) => (
  <header className={`header ${className}`}>
    Header
  </header>
);

export default Header;
