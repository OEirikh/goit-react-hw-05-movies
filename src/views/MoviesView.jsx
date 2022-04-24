import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { SearchBar } from 'components/SearchBar/SearchBar';

export function MoviesView(props) {
  return (
    <Box p={4}>
      <SearchBar />
      <Outlet />
    </Box>
  );
}

// MoviesView.propTypes = {};
