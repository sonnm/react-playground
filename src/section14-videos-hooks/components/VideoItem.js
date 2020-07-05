import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => (
  <div className="video-item item" onClick={() => onVideoSelect(video)}>
    <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
      <div className="description">{video.snippet.description}</div>
    </div>
  </div>
);

export default VideoItem;
