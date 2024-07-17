import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieDetails }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-44 p-2">
      <Link to={"/browse/" + movieDetails.id}>
        <img
          alt="movie"
          src={IMG_CDN_URL + posterPath}
          className="rounded-sm hover:w-36"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
