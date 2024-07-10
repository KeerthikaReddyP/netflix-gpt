import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const fetchurl =
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US";

  const getMovieVideos = async () => {
    const data = await fetch(fetchurl, API_OPTIONS);
    const jsonData = await data.json();

    const filterVideoResult = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideo = filterVideoResult.length
      ? filterVideoResult[0]
      : jsonData.results[0];
    console.log(trailerVideo);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/L4DrolmDxmw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
