import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const jsonData = await data.json();
      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [getNowPlayingMovies, nowPlayingMovies]);
};

export default useNowPlayingMovies;
