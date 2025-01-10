import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../api/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;