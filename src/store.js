import { configureStore } from '@reduxjs/toolkit';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import usersCountReducer from './features/usersCount/usersCountSlice';
import userReducer from './features/user/userSlice';
import chatReducer from './features/chat/chatSlice';

const socket = io('https://chat-party-backend-v4.herokuapp.com/');

const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const store = configureStore({
  reducer: {
    usersCount: usersCountReducer,
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketIoMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
