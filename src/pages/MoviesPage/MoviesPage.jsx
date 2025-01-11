import { useState, useEffect } from 'react';
import { searchMovies } from '../../api/api.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import css from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') || '';

  const handleQueryChange = e => {
    setSearchParams({ query: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.search.value.trim();

    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    if (searchQuery) {
      searchMovies(searchQuery)
        .then(response => {
          setMovies(response.data?.results || []);
        })
        .catch(error => {
          console.error(
            'Oops! Something went wrong while searching for movies. Please try again.',
            error
          );
          setMovies([]);
        });
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  return (
    <div className={css.moviesContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleQueryChange}
          className={css.searchInput}
          placeholder="Type to find your favorite movies..."
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
