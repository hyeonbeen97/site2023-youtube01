import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="box">
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} alt="영상" />
        <h3>{video.snippet.title}</h3>
      </Link>
    </div>
  );
};

export default VideoCard;
