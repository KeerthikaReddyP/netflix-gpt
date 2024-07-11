import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryBrowseContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div>
      <div>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryBrowseContainer;
