import React from 'react';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div>
      <ul>
        {videos.map(video => (
          <div className='flex justify-center p-4 cursor-pointer' key={video.id} onClick={() => onVideoClick(video)}>
            <img className='rounded-lg w-60'src={video.submission.thumbnail} alt={video.submission.placeholder} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
