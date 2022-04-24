// import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchTrendingFilms } from 'hooks/useFetchTrendingFilms';

export function HomeView() {
  const { films, isLoading } = useFetchTrendingFilms();

  return (
    <Box p={4}>
      <Text fontSize="5xl">Trending today</Text>
      {isLoading && 'Loading...'}
      {!isLoading && <MoviesList films={films} />}
    </Box>
  );
}

// Home.propTypes = {};
