import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainBrowseContainer = () => {

    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie=movies[0];
    const {original_title, overview, id}=mainMovie;

  return <div className="pt-[35%] md:pt-0 bg-black">
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
  </div>;
};

export default MainBrowseContainer;
