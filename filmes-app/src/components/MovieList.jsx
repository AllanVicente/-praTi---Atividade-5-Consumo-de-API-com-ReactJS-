import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

export default function MovieList({ movies, onCardClick }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
