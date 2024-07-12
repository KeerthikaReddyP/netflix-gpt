import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

const Browse = () => {
  const showGptPage = useSelector((store) => store.gpt.showGptPage);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptPage ? (
        <GptPage />
      ) : (
        <>
          <MainBrowseContainer />
          <SecondaryBrowseContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
