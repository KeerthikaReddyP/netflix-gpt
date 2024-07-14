import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies=useSelector(store=>store.movies.upcomingMovies);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, [getUpcomingMovies, upcomingMovies]);
};

export default useUpcomingMovies;