import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedMovies } from "../redux/actions/movieActions";
import MovieCard from "./MovieCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const recommendedMovies = useSelector(
    (state) => state.movies.recommendedMovies
  );

  useEffect(() => {
    dispatch(fetchRecommendedMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Recommended Movies</h1>
      <div className="movie-list">
        {recommendedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
