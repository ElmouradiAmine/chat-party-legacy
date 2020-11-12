import { configureStore } from '@reduxjs/toolkit';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import Peer from 'peerjs';
import usersCountReducer from './features/usersCount/usersCountSlice';
import userReducer from './features/user/userSlice';
import chatReducer from './features/chat/chatSlice';

const url = 'https://chat-party-backend-v4.herokuapp.com/';
// const local = 'localhost:5000';
const socket = io(url);

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

const peer = new Peer();
peer.on('open', () => {
  store.dispatch({
    type: 'chat/peerCreated',
    payload: {
      id: peer.id,
    },
  });
});
export default store;
