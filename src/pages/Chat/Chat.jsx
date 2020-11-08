/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Peer from 'peerjs';
import {
  videoUserStatusSelector,
  toggleUserCamera,
  userSelector,
} from '../../features/user/userSlice';

import {
  strangerSelector,
  chatStatusSelector,
} from '../../features/chat/chatSlice';
import './Chat.css';
import HeaderChat from '../../layout/ChatLayout/HeaderChat/HeaderChat';
import MessagesSection from '../../layout/ChatLayout/MessagesSection/MessagesSection';
import ComposeSection from '../../layout/ChatLayout/ComposeSection/ComposeSection';
import VideoOffIcon from '../../components/Icons/VideoOffIcon/VideoOffIcon';
import VideoOnIcon from '../../components/Icons/VideoOnIcon/VideoOnIcon';

// import AlertIcon from '../../components/Icons/AlertIcon/AlertIcon';

const Chat = ({ className }) => {
  const videoUserStatus = useSelector(videoUserStatusSelector);
  const chatStatus = useSelector(chatStatusSelector);
  const user = useSelector(userSelector);
  const stranger = useSelector(strangerSelector);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [videoUserStream, setVideoUserStream] = useState(null);
  const [peer, setPeer] = useState(null);

  const streamStrangerCamVideo = (stream) => {
    const video = document.querySelector('.video-stranger');
    video.srcObject = stream;
    video.onloadedmetadata = function () {
      video.play();
    };
  };

  // const removeStrangerCamVideo = () => {
  //   const video = document.querySelector('.video-stranger');
  //   video.pause();
  //   video.srcObject.getTracks().forEach((track) => {
  //     track.stop();
  //   });
  //   video.srcObject = null;
  // };

  useEffect(() => {
    const p = new Peer(`chatparty${user.id}`);

    p.on('call', (call) => {
      console.log('RECEVIED');
      call.on('stream', (remoteStream) => {
        streamStrangerCamVideo(remoteStream);
      });
    });

    setPeer(p);

    return () => {
      peer?.disconnect();
      peer?.destroy();
    };
  }, []);

  useEffect(() => {
    if (
      videoUserStatus === 'on'
      && chatStatus === 'matched'
      && videoUserStream
    ) {
      console.log(peer);
      const call = peer.call(`chatparty${stranger.id}`, videoUserStream);
      console.log(call);
    }
  }, [videoUserStatus, chatStatus, videoUserStream]);

  const streamCamVideo = (callback) => {
    const constraints = { video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector('.video-user');
        setVideoUserStream(mediaStream);
        video.srcObject = mediaStream;
        video.onloadedmetadata = function () {
          video.play();
          callback();
        };
      })
      .catch((err) => {
        console.log(`${err.name}: ${err.message}`);
      }); // always check for errors at the end.
  };

  const removeCamVideo = (callback) => {
    const video = document.querySelector('.video-user');
    video.pause();
    video.srcObject.getTracks().forEach((track) => {
      track.stop();
    });
    video.srcObject = null;
    setVideoUserStream(null);
    callback();
  };
  return (
    <div className={`chat ${className}`}>
      <div className="chat__video-container chat__video-container--1">
        <video className="video-stranger" autoPlay />
      </div>

      <div className="chat__video-container chat__video-container--2">
        <video className="video-user" autoPlay />

        {videoUserStatus === 'off' ? (
          <VideoOnIcon
            className="video-icon"
            onClick={() => {
              if (!disabled) {
                setDisabled(true);
                streamCamVideo(() => {
                  dispatch(toggleUserCamera());
                });
                setTimeout(() => {
                  setDisabled(false);
                }, 1000);
              }
            }}
          />
        ) : (
          <VideoOffIcon
            className="video-icon"
            onClick={() => {
              if (!disabled) {
                setDisabled(true);
                removeCamVideo(() => {
                  dispatch(toggleUserCamera());
                });
                setTimeout(() => {
                  setDisabled(false);
                }, 1000);
              }
            }}
          />
        )}
      </div>
      <div className="chat__messages">
        <HeaderChat className="chat__header" />
        {/* Messages section */}
        <MessagesSection className="chat__messagesSection" />
        {/* compose section */}
        <ComposeSection className="chat__composeSection" />
      </div>
    </div>
  );
};

Chat.propTypes = {
  className: PropTypes.string,
};

Chat.defaultProps = {
  className: '',
};

export default Chat;
