import React from "react";

const VideoTitle = ({title, overview}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
};

export default VideoTitle;
