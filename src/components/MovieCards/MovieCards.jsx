import React from 'react';
// import PropTypes from 'prop-types'

import { Box, Text, Image, Center } from '@chakra-ui/react';
import { IMAGE_URL } from 'services/apiRequests';

export function MovieCards({ film: { poster_path, name, title } }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      pd="5px"
    >
      <Image
        src={
          poster_path
            ? `${IMAGE_URL + poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
        }
        alt={title ?? name}
        borderRadius="lg"
      />
      <Center>
        <Text>{title ?? name}</Text>
      </Center>
    </Box>
  );
}

// MovieCards.propTypes = {}
