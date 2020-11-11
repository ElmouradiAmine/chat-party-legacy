import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DarkModeToggle from 'react-dark-mode-toggle';
import { themeSelector, changeTheme } from '../../features/chat/chatSlice';
import Logo from '../../components/Logo/Logo';

import './Header.css';
import UsersCount from '../../features/usersCount/UsersCount';

const Header = ({ className }) => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  return (
    <header className={`header ${className}`}>
      <div className="header__content">
        <Logo className="header__logo" />
        <UsersCount />
        <DarkModeToggle
          onChange={() => {
            dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'));
          }}
          checked={theme === 'dark'}
          size={64}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
