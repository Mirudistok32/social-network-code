import React from 'react';
import './VideoBackgound.scss';
import videoSrc from './../../assets/video/Nebula Red - 31420.webm';

export const VideoBackgound = ({ video = videoSrc }) => {
  return (
    <div className="video-backgound">
      <video className="video-backgound__video" src={video} autoPlay muted loop />
    </div>
  );
}
