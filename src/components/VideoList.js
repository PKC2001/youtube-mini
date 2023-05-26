import React from 'react';

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div>
      <ul>
        {videos.map(video => (
          <div className='flex justify-center p-4' key={video.id} onClick={() => onVideoClick(video)}>
            <img className='rounded-lg' width={120} src={video.submission.thumbnail} alt={video.submission.placeholder} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
