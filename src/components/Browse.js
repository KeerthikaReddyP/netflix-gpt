import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch=useDispatch();

  const getNowPlayingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const jsonData=await data.json();
    console.log(jsonData);
    dispatch(addNowPlayingMovies(jsonData.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[]);

  return (
    <div>
      <Header />
      
    </div>
  );
};

export default Browse;
