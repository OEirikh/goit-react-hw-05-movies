import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { getTrending } from '../services/apiRequests';

export function Home(props) {
  console.log(getTrending());
  return (
    <Box p={4}>
      <Text fontSize="5xl">Trending today</Text>
    </Box>
  );
}

// Home.propTypes = {};
