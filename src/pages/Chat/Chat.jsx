/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  useEffect, useState, useContext, useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PeerContext from '../../context/peerContext';

import {
  videoUserStatusSelector,
  userSelector,
  toggleUserCamera,
} from '../../features/user/userSlice';

import {
  strangerSelector,
  chatStatusSelector,
  strangerVideoStatusSelector,
} from '../../features/chat/chatSlice';
import './Chat.css';
import HeaderChat from '../../layout/ChatLayout/HeaderChat/HeaderChat';
import MessagesSection from '../../layout/ChatLayout/MessagesSection/MessagesSection';
import ComposeSection from '../../layout/ChatLayout/ComposeSection/ComposeSection';
import VideoOffIcon from '../../components/Icons/VideoOffIcon/VideoOffIcon';
import VideoOnIcon from '../../components/Icons/VideoOnIcon/VideoOnIcon';

import AlertIcon from '../../components/Icons/AlertIcon/AlertIcon';

const Chat = ({ className }) => {
  const videoUserStatus = useSelector(videoUserStatusSelector);
  const strangerVideoStatus = useSelector(strangerVideoStatusSelector);
  const chatStatus = useSelector(chatStatusSelector);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const stranger = useSelector(strangerSelector);
  const { peer } = useContext(PeerContext);
  const [strangerVideoOn, setStrangerVideoOn] = useState(false);
  const userVideoStreamRef = useRef();

  useEffect(() => {});

  function addUserVideoStream(stream) {
    const video = document.querySelector('.video-user');
    if (video) {
      video.muted = true;
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    }
  }

  function removeVideoUserStream() {
    const video = document.querySelector('.video-user');
    if (video) {
      video.srcObject.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
      video.onloadedmetadata = null;
    }
  }

  function removeVideoStrangerStream() {
    const video = document.querySelector('.video-stranger');
    if (video) {
      setStrangerVideoOn(false);
      video.srcObject.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    }
  }

  function addStrangerVideoStream(stream) {
    const video = document.querySelector('.video-stranger');
    if (video) {
      video.srcObject = stream;

      video.onloadedmetadata = () => {
        video.play();
      };
    }
  }
  function toggleVideoUser() {
    if (!videoUserStatus) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          addUserVideoStream(stream);
          userVideoStreamRef.current = stream;
          if (stranger) {
            peer.call(stranger.peerId, stream);
          }
          dispatch(toggleUserCamera());
          if (chatStatus === 'matched') {
            dispatch({
              type: 'server/toggleStrangerVideo',
              payload: {
                value: !videoUserStatus,
              },
            });
          }
        });
    } else {
      removeVideoUserStream();
      dispatch(toggleUserCamera());
      if (chatStatus === 'matched') {
        dispatch({
          type: 'server/toggleStrangerVideo',
          payload: {
            value: !videoUserStatus,
          },
        });
      }
    }
  }

  function sendUserStream(stream) {
    if (stranger) {
      peer.call(stranger.peerId, stream);
    }
  }

  useEffect(() => {
    if (chatStatus === 'matched') {
      dispatch({
        type: 'server/toggleStrangerVideo',
        payload: {
          value: videoUserStatus,
        },
      });
      if (userVideoStreamRef.current) {
        sendUserStream(userVideoStreamRef.current);
      }

      peer.on('call', (call) => {
        call.answer(null); // Answer the call with an A/V stream.
        call.on('stream', (remoteStream) => {
          addStrangerVideoStream(remoteStream);
        });
      });
    }
  }, [chatStatus, stranger]);

  // function removeVideoStream(label, stream) {
  //   const video = document.querySelector(label);
  // }

  // // function removeVideoStream(label) {
  // //   const video = document.querySelector(label);
  // //   video.srcObject = null;
  // //   video.pause();
  // //   video.remove();
  // // }

  // useEffect(() => {
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
  //           const call = peer.call(stranger.peerId, stream);
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
  // }, [videoUserStatus]);

  return (
    <div className={`chat ${className}`}>
      <div className="chat__video-container chat__video-container--1">
        {strangerVideoStatus ? (
          <video className="video-stranger" autoPlay />
        ) : (
          <p className="text-info">
            <AlertIcon className="alert-icon" />
            Video currently disabled !
          </p>
        )}
      </div>
      <div className="chat__video-container chat__video-container--2">
        {videoUserStatus ? (
          <video className="video-user" autoPlay />
        ) : (
          <p className="text-info">
            <AlertIcon className="alert-icon" />
            Video currently disabled !
          </p>
        )}
        {!videoUserStatus ? (
          <VideoOnIcon
            className="video-icon"
            onClick={() => {
              // dispatch(toggleUserCamera());
              toggleVideoUser();
            }}
          />
        ) : (
          <VideoOffIcon
            className="video-icon"
            onClick={() => {
              // dispatch(toggleUserCamera());
              toggleVideoUser();
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
