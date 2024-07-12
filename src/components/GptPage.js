import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptPage = () => {
  return (
    <div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  );
};

export default GptPage;
