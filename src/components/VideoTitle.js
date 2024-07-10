import React from "react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-28 p-10">
      <h1 className="text-3xl font-bold m-2 p-2">{title}</h1>
      <p className="m-2 p-2 w-1/4">{overview}</p>
      <div className="m-2 p-2">
        <button className="bg-red-600 text-red-100 py-2 px-6 text-lg font-semibold rounded-md mr-2">Play</button>
        <button className="bg-red-600 text-red-100 py-2 px-6 text-lg font-semibold rounded-md ml-2">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
