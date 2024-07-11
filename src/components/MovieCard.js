import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 p-2">
      <img alt="movie" src={IMG_CDN_URL + posterPath} className="rounded-sm" />
    </div>
  );
};

export default MovieCard;
