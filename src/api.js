import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmJjZGU4YTI4Yzk4ZGU5OTIyMjkzZjNjNzI0YmYwYyIsIm5iZiI6MTczODkzNjgxMy40MDIsInN1YiI6IjY3YTYxMWVkYWNhOTFkYTRiYTg1ZTU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dma8SvGjo1e796VQiSoeIKZI7XhXkrf4s3-3kqO4mu4";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
    },
});

export async function fetchTrendingMovies() {
    const response = await axiosInstance.get("/trending/movie/day");
    return response.data.results;
}

export async function searchMovies(query) {
    const response = await axiosInstance.get("/search/movie", {
        params: { query },
    });
    return response.data.results;
}

export async function fetchMovieDetails(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
}

export async function fetchMovieCast(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}