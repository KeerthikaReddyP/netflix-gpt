import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryBrowseContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black w-screen aspect-video">
      <div className="-mt-80">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryBrowseContainer;
