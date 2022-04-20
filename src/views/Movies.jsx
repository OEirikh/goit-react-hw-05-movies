import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Movies(props) {
  console.log(<Outlet />);
  return (
    <Box p={4}>
      <Text fontSize="5xl">Movies</Text>
      <NavLink to=":movieId">MovieDetailsPage</NavLink>
      <Outlet />
    </Box>
  );
}

Movies.propTypes = {};
