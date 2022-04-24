import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from 'services/apiRequests';

export function useFetchDetailsOneFilm() {
  const [filmDetails, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        const movieData = await movieDetails(movieId);
        setFilm(movieData);
      } catch (error) {
        // setError(error);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return { filmDetails, loading };
}
