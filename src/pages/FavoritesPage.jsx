import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFavorites = favorites.slice(startIndex, startIndex + itemsPerPage);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum filme favoritado ainda.</p>
      ) : (
        <>
          <MovieList movies={paginatedFavorites} onCardClick={handleCardClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
