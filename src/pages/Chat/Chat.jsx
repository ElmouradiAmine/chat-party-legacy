/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Peer from 'peerjs';
import {
  videoUserStatusSelector,
  userSelector,
  toggleUserCamera,
} from '../../features/user/userSlice';

import { strangerSelector } from '../../features/chat/chatSlice';
import './Chat.css';
import HeaderChat from '../../layout/ChatLayout/HeaderChat/HeaderChat';
import MessagesSection from '../../layout/ChatLayout/MessagesSection/MessagesSection';
import ComposeSection from '../../layout/ChatLayout/ComposeSection/ComposeSection';
import VideoOffIcon from '../../components/Icons/VideoOffIcon/VideoOffIcon';
import VideoOnIcon from '../../components/Icons/VideoOnIcon/VideoOnIcon';

// import AlertIcon from '../../components/Icons/AlertIcon/AlertIcon';

const Chat = ({ className }) => {
  const videoUserStatus = useSelector(videoUserStatusSelector);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const stranger = useSelector(strangerSelector);
  const [peer, setPeer] = useState(new Peer(user.id));

  // function addVideoStream(label, stream) {
  //   const video = document.querySelector(label);
  //   if (video) {
  //     video.srcObject = stream;
  //     video.addEventListener('loadedmetadata', () => {
  //       video.play();
  //     });
  //   }
  // }

  // function removeVideoStream(label, stream) {
  //   const video = document.querySelector(label);
  // }

  // function removeVideoStream(label) {
  //   const video = document.querySelector(label);
  //   video.srcObject = null;
  //   video.pause();
  //   video.remove();
  // }

  // useEffect(() => {
  //   console.log(peer);
  //   let mediaStream = null;
  //   if (videoUserStatus === 'on') {
  //     navigator.mediaDevices
  //       .getUserMedia({
  //         video: true,
  //         audio: false,
  //       })
  //       .then((stream) => {
  //         addVideoStream('.video-user', stream);
  //         console.log(stranger);
  //         console.log(stream);
  //         if (stranger) {
  //           const call = peer.call(stranger.id, stream);
  //           console.log(call);
  //         }

  //         mediaStream = stream;
  //       });
  //   }

  //   peer.on('call', (call) => {
  //     alert('received data');
  //     call.answer(null); // Answer the call with an A/V stream.
  //     call.on('stream', (remoteStream) => {
  //       addVideoStream('.video-stranger', remoteStream);
  //       console.log('passed');
  //     });
  //   });

  //   return () => {
  //     if (mediaStream) mediaStream.getTracks().forEach((track) => track.stop());
  //     peer.disconnect();
  //   };
  // }, [videoUserStatus]);

  return (
    <div className={`chat ${className}`}>
      <div className="chat__video-container chat__video-container--1">
        <video className="video-stranger" autoPlay />
      </div>

      <div className="chat__video-container chat__video-container--2">
        {videoUserStatus === 'on' ? (
          <video className="video-user" autoPlay />
        ) : (
          <></>
        )}
        {videoUserStatus === 'off' ? (
          <VideoOnIcon
            className="video-icon"
            onClick={() => {
              dispatch(toggleUserCamera());
            }}
          />
        ) : (
          <VideoOffIcon
            className="video-icon"
            onClick={() => {
              dispatch(toggleUserCamera());
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
