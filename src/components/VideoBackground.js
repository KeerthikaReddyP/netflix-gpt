import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({movieId}) => {

  const fetchurl="https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";

  const getMovieVideos=async ()=>{
    const data=await fetch(fetchurl, API_OPTIONS);
    const jsonData=await data.json();
    
    const filterVideoResult=jsonData.results.filter((video)=>(video.type==="Trailer"));
    console.log(filterVideoResult);
  };

  useEffect(()=>{
    getMovieVideos();
  },[]);

  return <div></div>;
};

export default VideoBackground;
