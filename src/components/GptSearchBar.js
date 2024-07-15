import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import geminiAIModel from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addAIMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieInTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    return jsonData.results;
  };

  const handleGptSearchBtnClick = async () => {
    //Making api call to gpt and get movie result
    // const gptResults=await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: searchText.current.value }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices);

    const prompt =
      "Act as a movie recommondation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me the names of 5 movies, comma separated like the example result. Example Result : Movie1, Movie2, Movie3, Movie4, Movie5";

    const aiResults = await geminiAIModel.generateContent(prompt);
    const response = await aiResults.response;
    const moviesArray = response.text().split(", ");

    const promiseArray = moviesArray.map((movie) => searchMovieInTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addAIMovieResult({
        movieNames: moviesArray,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] mx-4 md:mx-0 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="border border-black m-4 py-2 px-4 col-span-9"
        />
        <button
          className="bg-red-600 text-white font-bold m-4 py-2 px-2 md:px-4 rounded-md col-span-3"
          onClick={handleGptSearchBtnClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
