import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div className="text-center">No video selected</div>;
  }

  return (
    <div className='p-2 pl-6 min-w-400'>
      <div className='aspect-w-16 aspect-h-9'>
        <ReactPlayer className="cursor-pointer w-full h-full" width={1000} height={400} controls url={video.submission.mediaUrl} />
      </div>
      <h1 className='py-3 p-1'>{video.submission.title}</h1>
      <p className='p-1'>{video.submission.description}</p>
    </div>
  );
};

export default VideoPlayer;
