import {
  Outlet,
  NavLink,
  // useNavigate,
  // useLocation,
} from 'react-router-dom';
import { useFetchDetailsOneFilm } from 'hooks';
import { Box, Text, Button } from '@chakra-ui/react';
import { FilmCards } from 'components/FilmCards/FilmCards';
// import PropTypes from 'prop-types';

export function MovieDetailsPage() {
  const { filmDetails, isLoading } = useFetchDetailsOneFilm();
  const {
    title,
    release_date = '2022-00-00',
    vote_average,
    overview,
    genres = [
      {
        id: 1,
        name: '',
      },
    ],
  } = filmDetails;

  // let navigate = useNavigate();
  // let location = useLocation();
  // console.log(movieId);
  // console.log(navigate);
  // console.log(location);

  return (
    <Box p={4}>
      <Text fontSize="5xl">MovieDetailsPage</Text>
      <Button colorScheme="gray">Go Back</Button>
      {!isLoading && <FilmCards film={filmDetails} />}
      <Box>
        <Text>{title}</Text>
        <Text>{release_date.slice(0, 4)}</Text>
        <Text>{vote_average}</Text>
        <Text>{overview}</Text>
        {genres.map(ganre => (
          <Text key={ganre.id}>{ganre.name}</Text>
        ))}
      </Box>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Outlet />
    </Box>
  );
}

// MovieDetailsPage.propTypes = {};
