import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { getTrending } from '../services/apiRequests';
import { FilmCards } from 'components/FilmCards/FilmCards';

export function Home() {
  const location = useLocation();
  const [films, setTrends] = useState([]);

  useEffect(() => {
    getTrending().then(resp => {
      setTrends(resp.results);
    });
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="5xl">Trending today</Text>
      <Grid templateColumns="repeat(3, 5fr) ">
        {films.map(film => {
          return (
            <GridItem key={film.id}>
              <NavLink to={`movies/${film.id}`} state={{ from: location }}>
                <FilmCards film={film} />
              </NavLink>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

// Home.propTypes = {};
