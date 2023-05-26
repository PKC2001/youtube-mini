import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div className="text-center" >No video selected</div>;
  }

  return (
    <div className='p-2 pl-6'>
      <ReactPlayer width={1000} height={500} controls url={video.submission.mediaUrl} />
      <h1 className='py-3 p-1'>{video.submission.title}</h1>
      <p className='p-1'>{video.submission.description}</p>
    </div>
  );
};

export default VideoPlayer;
