import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./FavoriteButton.css";

export default function FavoriteButton({ movie }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const isFavorited = favorites.some(f => f.id === movie.id);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    let updated;
    if (isFavorited) {
      updated = favorites.filter(f => f.id !== movie.id);
    } else {
      updated = [...favorites, movie];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <button className="favorite-button" onClick={toggleFavorite}>
      {isFavorited ? <FaHeart className="heart filled" /> : <FaRegHeart className="heart outline" />}
    </button>
  );
}
