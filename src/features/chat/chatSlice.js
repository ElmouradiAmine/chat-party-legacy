/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  stranger: null,
  strangerIsTyping: false,
  status: 'waiting', // matched and stopped
  messages: [],
  playSoundTrigger: 0,
};

const chatSlice = createSlice({
  initialState,
  name: 'chat',
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', state.theme || 'light');
    },
    toggleStrangerTyping: (state, action) => {
      state.strangerIsTyping = action.payload;
    },
    addMessage: (state, action) => {
      const isMe = state.stranger.id !== action.payload.userId;
      state.messages.push({
        message: action.payload.message,
        timestamp: action.payload.timestamp,
        isMe,
      });
      if (!isMe) {
        state.playSoundTrigger += 1;
      }
    },
    matched: (state, action) => {
      state.messages = [];
      state.stranger = action.payload.stranger;
      state.status = 'matched';
    },
    next: (state) => {
      state.stranger = null;
      state.status = 'waiting';
      state.messages = [];
    },
    stopped: (state) => {
      state.status = 'stopped';
      state.strangerIsTyping = false;
      // state.stranger = null;
    },
  },
});

export const strangerSelector = (state) => state.chat.stranger;
export const chatStatusSelector = (state) => state.chat.status;
export const messagesSelector = (state) => state.chat.messages;
export const themeSelector = (state) => state.chat.theme;
export const strangerIsTypingSelector = (state) => state.chat.strangerIsTyping;
export const playSoundTriggerSelector = (state) => state.chat.playSoundTrigger;
export const { changeTheme } = chatSlice.actions;
export default chatSlice.reducer;
