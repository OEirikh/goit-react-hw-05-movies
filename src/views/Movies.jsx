import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

export function Movies(props) {
  return (
    <Box p={4}>
      <Text fontSize="5xl">Movies</Text>
      <Outlet />
    </Box>
  );
}

// Movies.propTypes = {};
