import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
// import PropTypes from 'prop-types'
import { MovieCards } from 'components/MovieCards/MovieCards';

export function MoviesList({ films }) {
  const location = useLocation();
  return (
    <Grid templateColumns="repeat(3, 5fr) ">
      {films.map(film => {
        return (
          <GridItem key={film.id}>
            <NavLink to={`movies/${film.id}`} state={{ from: location }}>
              <MovieCards film={film} />
            </NavLink>
          </GridItem>
        );
      })}
    </Grid>
  );
}

// MoviesList.propTypes = {}
