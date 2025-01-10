import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRmMGQ3N2RkM2YzNmJhYzMyNDFjYTg3M2MwNmI5ZSIsIm5iZiI6MTczNjM4MTE4OC40NDk5OTk4LCJzdWIiOiI2NzdmMTMwNGE2Nzc4YWE1YjM3YjFiNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rOFxiQ1MJss_wZAxhdLvFUJTypRTno2SbvDgq6mxD6Q'

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: TOKEN,
    },
    timeout: 10000,
  });

  export const fetchMovieDetails = (movieId) => {
    return apiClient.get(`/movie/${movieId}`);
  };
  
  export const fetchMovieCast = (movieId) => {
    return apiClient.get(`/movie/${movieId}/credits`);
  };
  
  export const fetchMovieReviews = (movieId) => {
    return apiClient.get(`/movie/${movieId}/reviews`);
  };
  
  export const searchMovies = (query) => {
    return apiClient.get("/search/movie", {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    });
  };
  
  export const fetchTrendingMovies = () => {
    return apiClient.get("/trending/movie/day");
  };