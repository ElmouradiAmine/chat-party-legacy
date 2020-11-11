import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../features/user/userSlice';
import {
  strangerSelector,
  chatStatusSelector,
} from '../../../features/chat/chatSlice';
import './HeaderChat.css';
import UserDetails from '../../../features/user/UserDetails';

function HeaderChat({ className }) {
  const user = useSelector(userSelector);
  const stranger = useSelector(strangerSelector);
  const chatStatus = useSelector(chatStatusSelector);
  return (
    <div className={`headerChat ${className}`}>
      <UserDetails
        className="headerChat__user-details"
        user={stranger}
        disabled={chatStatus === 'stopped'}
      />
      <UserDetails className="headerChat__user-details" user={user} />
    </div>
  );
}

HeaderChat.propTypes = {
  className: PropTypes.string,
};

HeaderChat.defaultProps = {
  className: '',
};

export default HeaderChat;
