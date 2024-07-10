import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerKey=useSelector(store=>store.movies?.trailerVideo?.key);

  const fetchurl = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US";

  const getMovieVideos = async () => {
    const data = await fetch(fetchurl, API_OPTIONS);
    const jsonData = await data.json();

    const filterVideoResult = jsonData.results.filter((video) => video.type === "Trailer");
    const trailerVideo = filterVideoResult.length? filterVideoResult[0]: jsonData.results[0];

    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
