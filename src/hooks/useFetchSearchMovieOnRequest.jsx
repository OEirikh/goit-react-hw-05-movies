import { useState, useEffect } from 'react';
import { searchMovies } from 'services/apiRequests';
import PropTypes from 'prop-types';

export function useFetchSearchMovieOnRequest(searchQuery) {
  const [filmsBySearch, setFilmsBySearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getMovies() {
      setIsLoading(true);
      try {
        const films = await searchMovies(searchQuery);
        setFilmsBySearch(films.results);
      } catch (error) {
        // setError(error);
        console.log(error.message, 'The query did not return any results');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [searchQuery]);
  return { filmsBySearch, isLoading };
}

useFetchSearchMovieOnRequest.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
