const API_KEY = "f3baef0989450374852a51035721e26f";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query, page = 1) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}&page=${page}&include_adult=false`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erro ao buscar filmes");
  return await response.json();
};

export const getMovieDetails = async (id) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits,videos,images`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erro ao buscar detalhes do filme");
  return await response.json();
};