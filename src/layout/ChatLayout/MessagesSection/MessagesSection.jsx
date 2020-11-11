import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './MessagesSection.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSelector, useDispatch } from 'react-redux';
import useSound from 'use-sound';
import BubbleMessage from '../../../components/BubbleMessage/BubbleMessage';
import Button from '../../../components/Button/Button';
import {
  chatStatusSelector,
  messagesSelector,
  strangerSelector,
} from '../../../features/chat/chatSlice';
import Spinner from '../../../components/Spinner/Spinner';
import ding from '../../../assets/sound/ding.mp3';

function MessagesSection({ className }) {
  const status = useSelector(chatStatusSelector);
  const messages = useSelector(messagesSelector);
  const stranger = useSelector(strangerSelector);
  const dispatch = useDispatch();
  const [play] = useSound(ding);

  useEffect(() => {
    play();
  }, [messages, status]);

  const nextChat = () => {
    if (status === 'stopped') {
      dispatch({
        type: 'server/nextChat',
      });
    }
  };

  if (status === 'waiting') {
    return <Spinner className="messagesSection__spinner" />;
  }
  return (
    <ScrollToBottom className={`messagesSection ${className}`}>
      {messages.map((message) => (
        <BubbleMessage
          key={message.timestamp}
          isMe={message.isMe}
          message={message.message}
          createdAt={message.createdAt}
        />
      ))}
      {status === 'stopped' && (
        <>
          <p className="messagesSection__info">
            {stranger?.username}
            {' '}
            has left the chat...
          </p>
          <Button
            className="messagesSection__next-btn"
            label="next"
            color="green"
            onClick={() => {
              nextChat();
            }}
          />
        </>
      )}
    </ScrollToBottom>
  );
}

MessagesSection.propTypes = {
  className: PropTypes.string,
};

MessagesSection.defaultProps = {
  className: '',
};

export default MessagesSection;
