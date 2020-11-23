/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/aria-role */
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
import Button from './components/Button/Button';
import ButtonCircleGroup from './components/ButtonCircleGroup/ButtonCircleGroup';

function App() {
  const connected = useSelector(userStatusSelector) === 'connected';
  const theme = useSelector(themeSelector);
  const [peer, setPeer] = useState();
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const p = new Peer(null, {
      secure: true,
      host: 'chat-party-peer-server.herokuapp.com',
      port: 443,
      debug: 3,
      options: {
        iceServers: [
          { url: 'stun:stun01.sipphone.com' },
          { url: 'stun:stun.ekiga.net' },
          { url: 'stun:stun.fwdnet.net' },
          { url: 'stun:stun.ideasip.com' },
          { url: 'stun:stun.iptel.org' },
          { url: 'stun:stun.rixtelecom.se' },
          { url: 'stun:stun.schlund.de' },
          { url: 'stun:stun.l.google.com:19302' },
          { url: 'stun:stun1.l.google.com:19302' },
          { url: 'stun:stun2.l.google.com:19302' },
          { url: 'stun:stun3.l.google.com:19302' },
          { url: 'stun:stun4.l.google.com:19302' },
          { url: 'stun:stunserver.org' },
          { url: 'stun:stun.softjoys.com' },
          { url: 'stun:stun.voiparound.com' },
          { url: 'stun:stun.voipbuster.com' },
          { url: 'stun:stun.voipstunt.com' },
          { url: 'stun:stun.voxgratia.org' },
          { url: 'stun:stun.xten.com' },
          {
            url: 'turn:numb.viagenie.ca',
            credential: 'muazkh',
            username: 'webrtc@live.com',
          },
          {
            url: 'turn:192.158.29.39:3478?transport=udp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808',
          },
          {
            url: 'turn:192.158.29.39:3478?transport=tcp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808',
          },
        ],
        sdpSemantics: 'unified-plan',
      },
    });

    setPeer(p);
  }, []);
  return (
    <PeerContext.Provider
      value={{
        peer,
      }}
    >
      <div
        className={`app ${theme}`}
        onClick={() => {
          setShowPopup(false);
        }}
      >
        <Header />
        {!connected ? <Home /> : <Chat />}
        <div
          className="popup-background"
          style={{
            display: showPopup ? 'block' : 'none',
          }}
        />
        <div
          className="popup"
          style={{
            display: showPopup ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          <ButtonCircleGroup />
          <p>
            🆕
            {' '}
            <strong
              style={{
                textDecoration: 'underline',
              }}
            >
              Patch notes v4.1.0
              {' '}
            </strong>
            :
          </p>
          <p>
            <span role="img">👉</span>
            {' '}
            Video Chat.
          </p>
          <p>
            <span role="img">👉</span>
            {' '}
            Emojis support.
          </p>
          <p>
            <span role="img">👉</span>
            {' '}
            Interactive links.
          </p>
          <p>
            <span role="img">👉</span>
            {' '}
            Performance enhancement.
          </p>

          <p style={{ marginBottom: '1.2rem' }}>
            To get the latest
            {' '}
            <strong> news </strong>
            {' '}
            follow us on
            {' '}
            <a
              href="https://www.facebook.com/yourchatparty"
              target="_blank"
              rel="noreferrer"
              className="facebook-link"
            >
              Facebook.
            </a>
          </p>

          <p>
            📢
            {' '}
            <strong
              style={{
                textDecoration: 'underline',
              }}
            >
              Announcement
              {' '}
            </strong>
            <p
              style={{
                marginBottom: '1.2rem',
              }}
            >
              <p
                style={{
                  marginBottom: '1.2rem',
                }}
              >
                We are sadly announcing that we won't be able to support this
                project any further due to a lack of funding. Thank you all for
                the amazing support you gave us so far and for your brilliant
                feedback. The servers will stay running till our providers shut
                them down. Our journey won't stop here, we will surely bring to
                life other ideas. Goodbye, my friends.
              </p>

              <p>
                <q
                  style={{
                    marginRight: '1rem',
                  }}
                >
                  <em
                    style={{
                      fontWeight: 200,
                    }}
                  >
                    When Hearts Are High The Time Will Fly, So Whistle While You
                    Work.
                  </em>
                </q>
                Snow White
              </p>
            </p>
          </p>

          <Button
            label="ok"
            onClick={() => {
              setShowPopup(false);
            }}
            color="green"
          />
        </div>
        <Footer />
      </div>
    </PeerContext.Provider>
  );
}

export default App;
