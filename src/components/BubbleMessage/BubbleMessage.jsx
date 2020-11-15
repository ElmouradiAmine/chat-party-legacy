import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Linkify from 'react-linkify';

import './BubbleMessage.css';

const BubbleMessage = ({ isMe, message, createdAt }) => {
  const time = moment(createdAt).format('LT');
  return (
    <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
      <a target="_blank" href={decoratedHref} key={key} rel="noreferrer" className={`message-link ${isMe && 'follow'}`}>
        {decoratedText}
      </a>
    )}
    >
      <div className="msg">
        <div className={`bubble ${isMe && 'altfollow'}`}>
          <div className="txt">
            <span className={`timestamp ${isMe && 'follow'}`}>{time}</span>
            <p className={`message ${isMe && 'follow'}`}>{message}</p>
          </div>
          <div className={`bubble-arrow ${isMe && 'alt'}`} />
        </div>
      </div>
    </Linkify>
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
