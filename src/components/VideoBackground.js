import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({movieId}) => {

  const getMovieVideos=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/1022789/videos?language=en-US", API_OPTIONS);
    const jsonData=await data.json();
    console.log(jsonData);
  };

  useEffect(()=>{
    getMovieVideos();
  },[]);

  return <div></div>;
};

export default VideoBackground;
