import React from 'react';
import { useSelector } from 'react-redux';

import { userStatusSelector } from './features/user/userSlice';
import { themeSelector } from './features/chat/chatSlice';

import './App.css';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

function App() {
  const connected = useSelector(userStatusSelector) === 'connected';
  const theme = useSelector(themeSelector);

  return (
    <div className={`app ${theme}`}>
      <Header />
      {!connected ? <Home /> : <Chat />}
      <Footer />
    </div>
  );
}

export default App;
