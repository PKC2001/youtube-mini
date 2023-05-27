import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://internship-service.onrender.com/videos?page=${pageNumber}`
        );
        setVideos(response.data.data.posts);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [pageNumber]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const onNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  const onPrevClick = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="bg-gray-100">
      <h1 className="text-center p-2 pb-6 text-2xl font-semibold ">Youtube Clone</h1>
      <div className="grid grid-cols-1 xl:grid-cols-5">
        <div className="xl:col-span-4">
          <VideoPlayer video={selectedVideo} />
          <div className="flex justify-center mt-4">
            <button onClick={onPrevClick} className="mr-2 text-lg font-bold">Prev</button>
            <button onClick={onNextClick} className="ml-2 text-lg font-bold">Next</button>
          </div>
        </div>
        <div className="xl:col-span-1">
          <div>
            <VideoList videos={videos} onVideoClick={handleVideoClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
