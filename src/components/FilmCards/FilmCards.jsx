import React from 'react';
// import PropTypes from 'prop-types'

import { Box, Text, Image, Center } from '@chakra-ui/react';
import { IMAGE_URL } from 'services/apiRequests';

export function FilmCards({ film: { poster_path, name, title } }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={`${IMAGE_URL + poster_path}`}
        alt={title ?? name}
        borderRadius="lg"
      />
      <Center>
        <Text>{title ?? name}</Text>
      </Center>
    </Box>
  );
}

// FilmCards.propTypes = {}
