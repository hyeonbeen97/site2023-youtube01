import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="videos__inner">
      {videos.map((video, idx) => (
        <VideoCard key={idx} video={video} />
      ))}
    </div>
  );
};

export default Videos;
