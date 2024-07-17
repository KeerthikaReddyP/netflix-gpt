import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, NETFLIX_BACKGROUND_IMAGE } from "../utils/constants";

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchData(id) {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_OPTIONS
      );
      const jsonData = await data.json();
      const filterVideoResult = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailerVideo = filterVideoResult.length
        ? filterVideoResult[0]
        : jsonData.results[0];

      setMovieDetails(trailerVideo);
    }
    fetchData(id);
  }, [id]);

  if(!movieDetails) return <h1 className="font-bold text-center m-10 p-10">Loading...</h1>;
  return (
    <div className="flex justify-center">
        <div className="fixed -z-10">
        <img
          alt="netflix background"
          src={NETFLIX_BACKGROUND_IMAGE}
          className="h-screen object-cover w-screen"
        />
      </div>
      <iframe
        className="w-2/3 mt-8 aspect-video rounded-lg"
        src={"https://www.youtube.com/embed/" + movieDetails.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MoviePage;
