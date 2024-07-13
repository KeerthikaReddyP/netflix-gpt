import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="relative z-20 pl-6">
      <h1 className="text-xl m-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll m-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex" style={{ WebkitScrollbar: 'none' }}>
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
