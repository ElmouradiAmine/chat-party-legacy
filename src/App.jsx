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
      host: '9000-dc7ffc50-b1af-4c5a-99c3-c623c9301efb.ws-eu01.gitpod.io/',
      port: 443,
      debug: 3,

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
