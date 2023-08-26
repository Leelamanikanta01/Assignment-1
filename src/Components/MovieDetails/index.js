import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movies.movies.find((m) => m.id === id)
  );

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
};

export default MovieDetailsPage;
