/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  status: 'idle',
  user: null,
  video: {
    permission: false,
    status: 'off',
  },
};

const user = createSlice({
  initialState,
  name: 'user',
  reducers: {
    roomChanged: (state, action) => {
      if (state.user) state.user.room = action.payload.room;
    },
    userLoading: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    userConnected: (state, action) => {
      if (state.error === '') {
        state.status = 'connected';
        state.user = action.payload.user;
      }
    },
    userCheckError: (state) => {
      if (state.status === 'loading') {
        state.status = 'failed';
        state.error = 'A network error has occured !';
      }
    },
    toggleUserCamera: (state) => {
      state.video.status = state.video.status === 'on' ? 'off' : 'on';
    },
  },
});

export const userSelector = (state) => state.user.user;
export const userStatusSelector = (state) => state.user.status;
export const userErrorSelector = (state) => state.user.error;
export const videoUserStatusSelector = (state) => state.user.video.status;
export const { userLoading, userCheckError, toggleUserCamera } = user.actions;

export default user.reducer;
