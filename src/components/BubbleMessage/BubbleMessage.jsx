import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './BubbleMessage.css';

const BubbleMessage = ({ isMe, message, createdAt }) => {
  const time = moment(createdAt).format('LT');
  return (
    <div className="msg">
      <div className={`bubble ${isMe && 'altfollow'}`}>
        <div className="txt">
          <span className={`timestamp ${isMe && 'follow'}`}>{time}</span>
          <p className={`message ${isMe && 'follow'}`}>{message}</p>
        </div>
        <div className={`bubble-arrow ${isMe && 'alt'}`} />
      </div>
    </div>
  );
};

BubbleMessage.propTypes = {
  isMe: PropTypes.bool,
  message: PropTypes.string,
  createdAt: PropTypes.number,
};

BubbleMessage.defaultProps = {
  isMe: false,
  message: '',
  createdAt: 0,
};

export default BubbleMessage;
