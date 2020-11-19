import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  chatStatusSelector,
  strangerSelector,
  strangerIsTypingSelector,
} from '../../../features/chat/chatSlice';
import { userSelector } from '../../../features/user/userSlice';

import './ComposeSection.css';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

function ComposeSection({ className }) {
  const [message, setMessage] = useState('');
  const chatStatus = useSelector(chatStatusSelector);
  const user = useSelector(userSelector);
  const stranger = useSelector(strangerSelector);
  const strangerIsTyping = useSelector(strangerIsTypingSelector);
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState(false);

  const validate = () => {
    if (message.trim() !== '') {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    if (validate() && chatStatus === 'matched' && !isTyping) {
      setIsTyping(true);
      dispatch({
        type: 'server/userIsTyping',
        payload: true,
      });
    } else if (e.target.value === '' && isTyping) {
      dispatch({
        type: 'server/userIsTyping',
        payload: false,
      });
      setIsTyping(false);
    }
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (validate() && chatStatus === 'matched') {
      dispatch({
        type: 'server/sendMessage',
        payload: {
          userId: user.id,
          room: user.room,
          message,
        },
      });
      setMessage('');
      setIsTyping(false);
      dispatch({
        type: 'server/userIsTyping',
        payload: false,
      });
    }
  };

  const stopChat = () => {
    if (chatStatus === 'matched') {
      dispatch({
        type: 'server/stopChat',
      });

      dispatch({
        type: 'server/toggleStrangerVideo',
        payload: {
          value: false,
        },
      });
    }
  };

  const nextChat = () => {
    if (chatStatus === 'stopped') {
      dispatch({
        type: 'server/nextChat',
      });
    }
  };

  return (
    <form className={`compose ${className}`} onSubmit={sendMessage}>
      <p
        style={{
          display: strangerIsTyping ? 'block' : 'none',
        }}
        className="stranger-typing"
      >
        {stranger?.username || 'Stranger'}
        {' '}
        is typing ...
      </p>
      {chatStatus !== 'stopped' ? (
        <Button
          label="stop"
          color="red"
          onClick={() => {
            stopChat();
          }}
          disabled={chatStatus === 'waiting'}
        />
      ) : (
        <Button
          label="next"
          color="green"
          onClick={() => {
            nextChat();
          }}
        />
      )}
      <Input
        className="compose__input"
        placeholder="Your message"
        value={message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="compose__btn-send"
        label="send"
        color="yellow"
        onClick={sendMessage}
      />
    </form>
  );
}

ComposeSection.propTypes = {
  className: PropTypes.string,
};

ComposeSection.defaultProps = {
  className: '',
};

export default ComposeSection;
