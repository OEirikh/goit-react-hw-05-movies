import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

export function SearchBar({ searchHandler }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => setInputValue(evt.target.value.toLowerCase());

  const submitHandler = evt => {
    evt.preventDefault();

    if (inputValue.trim() === '') {
      return alert('Enter your request, please');
    }

    searchHandler(inputValue);
    // setInputValue('');
  };

  return (
    <Box as="form" mb="5" onSubmit={submitHandler}>
      <InputGroup>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="Searh Movies"
          _placeholder={{ opacity: 0.5, color: 'teal' }}
          size="md"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            type="submit"
            aria-label="Search database"
            size="sm"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};
