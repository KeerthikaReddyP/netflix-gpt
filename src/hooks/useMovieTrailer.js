import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();
    const trailerVideo=useSelector(store=>store.movies.trailerVideo);
    const fetchurl = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US";
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getMovieVideos = async () => {
      const data = await fetch(fetchurl, API_OPTIONS);
      const jsonData = await data.json();
  
      const filterVideoResult = jsonData.results.filter((video) => video.type === "Trailer");
      const trailerVideo = filterVideoResult.length? filterVideoResult[0]: jsonData.results[0];
  
      dispatch(addTrailerVideo(trailerVideo));
    };
  
    useEffect(() => {
      !trailerVideo && getMovieVideos();
    }, [getMovieVideos, trailerVideo]);
};

export default useMovieTrailer;