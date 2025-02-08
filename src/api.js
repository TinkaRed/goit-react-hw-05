import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmJjZGU4YTI4Yzk4ZGU5OTIyMjkzZjNjNzI0YmYwYyIsIm5iZiI6MTczODkzNjgxMy40MDIsInN1YiI6IjY3YTYxMWVkYWNhOTFkYTRiYTg1ZTU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dma8SvGjo1e796VQiSoeIKZI7XhXkrf4s3-3kqO4mu4';

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
