import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => (
  <div className="video-list ui list relaxed divided">
    {videos.map((video) => (
      <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    ))}
  </div>
);

export default VideoList;
