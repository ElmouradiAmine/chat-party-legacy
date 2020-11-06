import React from 'react';
import PropTypes from 'prop-types';

import './Chat.css';

const Chat = ({ className }) => (
  <div className={`chat ${className}`}>
    <div className="chat__video-container chat__video-container--1">Video Container</div>
    <div className="chat__video-container chat__video-container--2">Video Container</div>
    <div className="chat__messages">message Container</div>
  </div>
);

Chat.propTypes = {
  className: PropTypes.string,
};

Chat.defaultProps = {
  className: '',
};

export default Chat;
