import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
// import PropTypes from 'prop-types'

// import { searchMovies } from 'services/apiRequests';

export function SearchBar(props) {
  const [value, setValue] = useState('');

  const handleChange = evt => setValue(evt.target.value.toLowerCase());

  return (
    <>
      <InputGroup>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Searh Movies"
          _placeholder={{ opacity: 0.5, color: 'teal' }}
          size="md"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label="Search database"
            size="sm"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </>
  );
}

// SearchBar.propTypes = {}
