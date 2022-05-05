import { useEffect, useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useFetchSearchMovieOnRequest } from 'hooks';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';

export function MoviesSearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { filmsBySearch, isLoading } =
    useFetchSearchMovieOnRequest(searchQuery);
  const currentSearchQuery = searchParams.get('query');

  useEffect(() => {
    currentSearchQuery
      ? setSearchQuery(currentSearchQuery)
      : setSearchParams({ query: searchQuery });
  }, [currentSearchQuery, searchQuery, setSearchParams, setSearchQuery]);

  const searchHandler = query => {
    setSearchQuery(query);
    setSearchParams({ query: query });
  };

  return (
    <Box p={4}>
      <SearchBar searchHandler={searchHandler} />
      {isLoading && '...Loading'}
      {!isLoading && <MoviesList films={filmsBySearch} />}
      <Outlet />
    </Box>
  );
}
