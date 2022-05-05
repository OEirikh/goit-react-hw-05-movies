import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types'

import { Box, Text, Image, Center } from '@chakra-ui/react';
import { IMAGE_URL } from 'services/apiRequests';

export function MovieCards({
  film: { poster_path, name, title, id },
  route = '',
}) {
  const location = useLocation();

  return (
    <Box width="300px">
      <NavLink to={`${route}${id}`} state={{ from: location }}>
        <Box height="450px">
          <Image
            widgh="100%"
            src={
              poster_path
                ? `${IMAGE_URL + poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
            }
            alt={title ?? name}
            borderRadius="lg"
          />
        </Box>
        <Box>
          <Center>
            <Text fontWeight={500}>{title ?? name}</Text>
          </Center>
        </Box>
      </NavLink>
    </Box>
  );
}

// MovieCards.propTypes = {}
