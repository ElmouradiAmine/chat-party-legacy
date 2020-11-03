import { configureStore } from '@reduxjs/toolkit';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import usersCountReducer from './features/usersCount/usersCountSlice';

const socket = io('http://localhost:5000');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const store = configureStore({
  reducer: {
    usersCount: usersCountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketIoMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
