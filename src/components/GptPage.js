import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";

const GptPage = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img alt="netflix background" src={NETFLIX_BACKGROUND_IMAGE} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptPage;
