import React, { useState } from 'react';
import MainLayout from './MainLayout';
import MovieList from './MovieList';
import HeaderSearchBox from './HeaderSearchBox';

type MovieSearchState = {
  searchQuery: string,
}

const MovieSearch: React.FC = () => {
  const [filter, setFilter] = useState<MovieSearchState>({
    searchQuery: '',
  });

  const handleSearchBarChange = (searchQuery: string) => {
    setFilter({
      searchQuery,
    });
  };

  return (
    <MainLayout headerContent={<HeaderSearchBox onSearch={handleSearchBarChange} />}>
      <MovieList filter={filter} />
    </MainLayout>
  );
};

export default MovieSearch;
