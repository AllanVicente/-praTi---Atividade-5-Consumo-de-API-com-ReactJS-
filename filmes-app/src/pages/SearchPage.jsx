import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import '../App.css';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const [inputQuery, setInputQuery] = useState(query);

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchMovies(query, page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
        setMovies([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  const handleSearch = () => {
    if (inputQuery.trim() === "") return;
    setSearchParams({ query: inputQuery, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ query, page: newPage });
  };

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="search-container">
      <h1>Busca de Filmes</h1>
      <div className="search-controls">
        <input
          type="text"
          placeholder="Digite o nome do filme"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {loading && <p className="loading-message">Carregando...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && query && movies.length === 0 && <p className="no-results-message">Nenhum filme encontrado.</p>}

      <MovieList movies={movies} onCardClick={handleCardClick} />

      {movies.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}