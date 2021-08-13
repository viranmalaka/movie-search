import React, { useEffect, useState } from 'react';
import MovieService from '../Service/MovieService';
import MiniMovieDetails from '../Models/MiniMovieDetails';
import { isErrorResponse } from '../Common/utils';
import WelcomeMessageBox from './WelcomeMessageBox';
import NoResultsFoundMessageBox from './NoResultsFoundMessageBox';
import MessageBox from './BaseComponents/MessageBox';
import MovieCardContainer from './BaseComponents/MovieCardContainer';

type MovieListProps = {
  filter: {
    searchQuery: string,
  }
}

const MovieList: React.FC<MovieListProps> = ({ filter }: MovieListProps) => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const [movieLoadingError, setMovieLoadingError] = useState<string>('');
  const [movieList, setMovieList] = useState<MiniMovieDetails[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalSearchResults, setTotalSearchResults] = useState<number>(0);

  const fetchMovies = async (append: boolean) => {
    if (filter.searchQuery === '') {
      setMovieLoadingError('');
      setMovieList([]);
      setPageNumber(1);
      return;
    }

    setLoading(true);

    const movies = await MovieService.getInstance().search(filter.searchQuery, pageNumber);

    if (isErrorResponse(movies.Response)) {
      setMovieLoadingError(movies.Error || '');
      setPageNumber(1);
      setMovieList([]);
      setLoading(false);
      return;
    }

    setMovieLoadingError(movies.Error || '');
    setTotalSearchResults(parseInt(movies.totalResults || '0'));

    const fetchedMovies = movies.Search || [];
    if (append) {
      setMovieList([...movieList, ...fetchedMovies]);
    } else {
      setMovieList(fetchedMovies);
    }

    setLoading(false);
  };

  useEffect(() => {
    setPageNumber(1);
    setMovieList([]);
    fetchMovies(false);
  }, [filter.searchQuery]);

  useEffect(() => {
    fetchMovies(true);
  }, [pageNumber]);

  const handleOnFetchNextPage = () => {
    setPageNumber(pageNumber + 1);
  };


  if (isLoading && movieList.length === 0) {
    return <MessageBox type="info">Searching...</MessageBox>;
  }

  if (movieLoadingError === '' && movieList.length === 0) {
    return <WelcomeMessageBox />;
  }

  if (movieLoadingError !== '' && movieList.length === 0) {
    return <NoResultsFoundMessageBox />;
  }

  const leftMovieCount = totalSearchResults - pageNumber * 10;

  return <MovieCardContainer dataSource={movieList} onFetchNextPage={handleOnFetchNextPage}
                             leftMovieCount={leftMovieCount} />;
};

export default MovieList;
