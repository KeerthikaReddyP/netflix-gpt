import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-4 md:px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-3xl font-bold m-2 p-2">{title}</h1>
      <p className="m-2 p-2 w-1/4 hidden md:inline-block">{overview}</p>
      <div className="m-2 p-2">
        <button className="bg-white text-black py-1 md:py-2 px-3 md:px-6 text-lg font-bold rounded-md mr-2 hover:bg-opacity-80">
          ▷Play
        </button>
        <button className="bg-gray-600 text-white py-2 px-6 text-lg font-semibold rounded-md ml-2 hover:bg-opacity-80 hidden md:inline-block">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
