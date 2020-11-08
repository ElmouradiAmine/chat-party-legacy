/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stranger: null,
  status: 'waiting', // matched and stopped
  messages: [],
};

const chatSlice = createSlice({
  initialState,
  name: 'chat',
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        message: action.payload.message,
        timestamp: action.payload.timestamp,
        isMe: state.stranger.id !== action.payload.userId,
      });
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
      // state.stranger = null;
    },
  },
});

export const strangerSelector = (state) => state.chat.stranger;
export const chatStatusSelector = (state) => state.chat.status;
export const messagesSelector = (state) => state.chat.messages;
// export const { getCount } = chatSlice.actions;
export default chatSlice.reducer;
