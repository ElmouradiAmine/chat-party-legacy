/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { checkText } from 'smile2emoji';
import { Picker } from 'emoji-mart';
import {
  chatStatusSelector,
  strangerSelector,
  strangerIsTypingSelector,
  themeSelector,
} from '../../../features/chat/chatSlice';

import { userSelector } from '../../../features/user/userSlice';

import './ComposeSection.css';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import 'emoji-mart/css/emoji-mart.css';
import emojiImage from '../../../assets/svgs/emoji.png';

function ComposeSection({ className }) {
  const [message, setMessage] = useState('');
  const chatStatus = useSelector(chatStatusSelector);
  const user = useSelector(userSelector);
  const theme = useSelector(themeSelector);
  const stranger = useSelector(strangerSelector);
  const strangerIsTyping = useSelector(strangerIsTypingSelector);
  const dispatch = useDispatch();
  const [isTyping, setIsTyping] = useState(false);
  const [emojiPickerIsVisible, setEmojiPickerIsVisible] = useState(false);

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
    e?.preventDefault();
    if (validate() && chatStatus === 'matched') {
      dispatch({
        type: 'server/sendMessage',
        payload: {
          userId: user.id,
          room: user.room,
          message: checkText(message),
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

  const addEmoji = (emoji) => {
    setMessage(message + emoji);
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
      {emojiPickerIsVisible && (
      <Picker
        onClick={(emoji, event) => {
          addEmoji(emoji.native);
        }}
        theme={theme}
        set="google"
        color="#ffbc00"
        perLine="8"
        showSkinTones={false}
        showPreview={false}
        style={{
          position: 'absolute',
          right: '1.2rem',
          bottom: '6.4rem',
          backgroundColor: theme === 'dark' ? '#2c2f33' : 'white',
        }}
      />
      )}

      <Input
        className="compose__input"
        placeholder="Your message"
        value={message}
        onChange={handleChange}
        onKeyDown={sendMessage}
      />
      <div
        role="button"
        className="emoji-img-container"
        onClick={() => {
          if (emojiPickerIsVisible) { setEmojiPickerIsVisible(false); } else {
            setEmojiPickerIsVisible(true);
          }
        }}
      >
        <img src={emojiImage} alt="" className="emoji-img" />

      </div>
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
