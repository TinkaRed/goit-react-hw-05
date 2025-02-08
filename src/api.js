import axios from 'axios';

const API_KEY = '7fbcde8a28c98de9922293f3c724bf0c'; // Твій API Key
const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmJjZGU4YTI4Z...'; // Твій API Read Access Token

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

// Отримати список популярних фільмів (Trending movies)
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, options);
  return response.data.results;
};

// Пошук фільму за ключовим словом
export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
  return response.data.results;
};

// Отримати деталі фільму
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  return response.data;
};

// Отримати акторський склад
export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, options);
  return response.data.cast;
};

// Отримати огляди фільму
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, options);
  return response.data.results;
};

// Отримати URL зображення
export const getMoviePoster = (posterPath, size = 'w500') => {
  return posterPath ? `https://image.tmdb.org/t/p/${size}${posterPath}` : null;
};
