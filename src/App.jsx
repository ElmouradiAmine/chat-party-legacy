import React from 'react';
import { useSelector } from 'react-redux';

import { userStatusSelector } from './features/user/userSlice';

import './App.css';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

function App() {
  const connected = useSelector(userStatusSelector) === 'connected';
  return (
    <div className="app">
      <Header />
      {!connected ? <Home /> : <Chat />}
      <Footer />
    </div>
  );
}

export default App;
