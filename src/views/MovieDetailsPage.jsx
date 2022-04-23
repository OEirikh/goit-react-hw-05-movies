import { useState, useEffect } from 'react';
import {
  Outlet,
  NavLink,
  useParams,
  // useNavigate,
  // useLocation,
} from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';
import { movieDetails } from 'services/apiRequests';
import { FilmCards } from 'components/FilmCards/FilmCards';
// import PropTypes from 'prop-types';

export function MovieDetailsPage() {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        const movieData = await movieDetails(movieId);
        setFilm(movieData);
      } catch (error) {
        setError(error);
        console.log('ERROR by useFetchMovieDetails', error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  console.log(error.message);
  // let navigate = useNavigate();
  // let location = useLocation();
  // console.log(movieId);
  // console.log(navigate);
  // console.log(location);
  // const data = film.release_date;
  // const dataSlise = data.slice(0, 4);
  // console.log(dataSlise);

  return (
    <Box p={4}>
      <Text fontSize="5xl">MovieDetailsPage</Text>
      <Button colorScheme="gray">Go Back</Button>
      {!loading && <FilmCards film={film} />}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Outlet />
    </Box>
  );
}

// MovieDetailsPage.propTypes = {};
