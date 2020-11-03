import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const socket = io('http://localhost:5000');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const store = configureStore({
  reducer: {

  },
  middleware: [socketIoMiddleware],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

store.dispatch({ type: 'server/hello', data: 'Hello!' });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
