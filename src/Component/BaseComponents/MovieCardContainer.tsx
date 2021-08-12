import React, { useEffect, useState } from 'react';
import MiniMovieDetails from '../../Models/MiniMovieDetails';
import ImageCard from './ImageCard';
import MovieDetails from '../../Models/MovieDetails';
import MovieService from '../../Service/MovieService';
import { isErrorResponse } from '../../Common/utils';

type MovieCardContainerProps = {
  dataSource: MiniMovieDetails[],
  onFetchNextPage: () => void,
  leftMovieCount: number,
}

const MovieCardContainer: React.FC<MovieCardContainerProps> = ({ dataSource, onFetchNextPage, leftMovieCount }: MovieCardContainerProps) => {

  const [moreDetailMovieId, setMoreDetailMovieId] = useState<string>('');
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [movieList, setMovieList] = useState<MiniMovieDetails[]>(dataSource);

  useEffect(() => {
    setMovieList([...dataSource]);
  }, [dataSource]);

  useEffect(() => {
    (async () => {
      const results = await MovieService.getInstance().getMovieById(moreDetailMovieId);
      if (isErrorResponse(results.Response)) {
        console.log(results);
      }

      setMovieDetails(results as MovieDetails);
    })();
  }, [moreDetailMovieId]);

  const handleViewMoreDetails = (imdbID: string, index: number) => {
    setMoreDetailMovieId(imdbID);
    if (index % 2 === 1) {
      const newList = [...dataSource];
      newList[index - 1] = dataSource[index];
      newList[index] = dataSource[index - 1];
      setMovieList(newList);
    }
  };

  return (
    <>
      <div className="list-area">
        {movieList.map((movie, index) => (
          <ImageCard
            key={movie.imdbID}
            image={movie.Poster}
            fullWidth={movie.imdbID === moreDetailMovieId}
            content={<div>
              {movie.Title}
              {movie.imdbID === moreDetailMovieId && movieDetails && <>
                <div className="section">
                  <div className="title">Plot</div>
                  <div className="content">{movieDetails.Plot}</div>
                </div>
                <div className="section">
                  <div className="title">Actors</div>
                  <div className="content">{movieDetails.Actors}</div>
                </div>
                <div className="section">
                  <div className="title">Ratings</div>
                  <div className="content">
                    <ul>
                      {movieDetails.Ratings.map((rating) => <li
                        key={rating.Source}>{rating.Source}: {rating.Value}</li>)}
                    </ul>
                  </div>
                </div>
              </>}
            </div>}
            subContent={<div>{movie.Year}</div>}
            actionButton={<button
              className="ui-button"
              onClick={() => handleViewMoreDetails(movie.imdbID, index)}
            >Details</button>}
          />
        ))}
      </div>

      {leftMovieCount > 0 && <div className="load-more-section">
        ({leftMovieCount} more items)
        <button className="ui-button" onClick={onFetchNextPage}>Load More...</button>
      </div>
      }
    </>
  );
};

export default MovieCardContainer;
