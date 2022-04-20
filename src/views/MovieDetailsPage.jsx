import React from 'react';
import {
  Outlet,
  NavLink,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';
// import PropTypes from 'prop-types';

export function MovieDetailsPage(props) {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  console.log(params);
  console.log(navigate);
  console.log(location);

  return (
    <Box p={4}>
      <Text fontSize="5xl">MovieDetailsPage</Text>
      <Button colorScheme="gray">Go Back</Button>

      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Outlet />
    </Box>
  );
}

// MovieDetailsPage.propTypes = {};
