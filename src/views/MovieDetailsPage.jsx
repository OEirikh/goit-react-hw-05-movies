import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
// import PropTypes from 'prop-types';

export function MovieDetailsPage(props) {
  return (
    <Box p={4}>
      <Text fontSize="5xl">MovieDetailsPage</Text>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </Box>
  );
}

// MovieDetailsPage.propTypes = {};
