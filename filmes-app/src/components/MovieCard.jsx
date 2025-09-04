import React from "react";
import FavoriteButton from "./FavoriteButton";
import "./MovieCard.css";

export default function MovieCard({ movie, onCardClick }) {
  return (
    <div className="movie-card" onClick={() => onCardClick(movie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="movie-card-image"
      />
      <h3 className="movie-card-title">{movie.title}</h3>
      <p className="movie-card-year">{movie.release_date?.slice(0, 4)}</p>
      <div
        className="movie-card-favorite"
        onClick={(e) => e.stopPropagation()} 
      >
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
}
