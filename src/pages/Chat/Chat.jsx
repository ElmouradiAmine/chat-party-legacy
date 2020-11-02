import React from 'react';
import PropTypes from 'prop-types';

import './Chat.css';

const Chat = ({ className }) => <div className={`chat ${className}`}>Chat</div>;

Chat.propTypes = {
  className: PropTypes.string,
};

Chat.defaultProps = {
  className: '',
};

export default Chat;
