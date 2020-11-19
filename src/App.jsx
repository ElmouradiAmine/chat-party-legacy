import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Peer from 'peerjs';

import { userStatusSelector } from './features/user/userSlice';
import { themeSelector } from './features/chat/chatSlice';
import PeerContext from './context/peerContext';
import './App.css';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

function App() {
  const connected = useSelector(userStatusSelector) === 'connected';
  const theme = useSelector(themeSelector);
  const [peer, setPeer] = useState();

  useEffect(() => {
    const p = new Peer(null, {
      secure: true,
      host: 'chat-party-peer-server.herokuapp.com',
      port: 443,
      debug: 2,
      config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] },
    });

    setPeer(p);
  }, []);
  return (
    <PeerContext.Provider
      value={{
        peer,
      }}
    >
      <div className={`app ${theme}`}>
        <Header />
        {!connected ? <Home /> : <Chat />}
        <Footer />
      </div>
    </PeerContext.Provider>
  );
}

export default App;
