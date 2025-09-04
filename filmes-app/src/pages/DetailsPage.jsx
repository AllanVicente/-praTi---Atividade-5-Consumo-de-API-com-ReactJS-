import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import FavoriteButton from "../components/FavoriteButton";
import "./DetailsPage.css";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  if (loading) return <p className="loading-text">Carregando...</p>;
  if (error) return <p className="error-text">{error}</p>;
  if (!movie) return null;

  const director = movie.credits?.crew?.find(c => c.job === "Director")?.name || "Não informado";
  const cast = movie.credits?.cast?.slice(0, 5).map(c => c.name).join(", ") || "Não informado";

  return (
    <div className="details-container">
      <h1 className="details-title">{movie.title}</h1>
      <div className="details-content">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="details-img"
        />
        <div className="details-info">
          <p><strong>Diretor:</strong> {director}</p>
          <p><strong>Elenco:</strong> {cast}</p>
          <p><strong>Sinopse:</strong> {movie.overview || "Não informado"}</p>
          <p><strong>Avaliação:</strong> {movie.vote_average.toFixed(1)} / 10</p>
          <div className="favorite-button-wrapper">
            <FavoriteButton movie={movie} />
          </div>
          <button className="back-button" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
