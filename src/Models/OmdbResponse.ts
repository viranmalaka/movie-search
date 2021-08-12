import MovieRating from './MovieRating';
import MiniMovieDetails from './MiniMovieDetails';

export default interface OmdbResponse {
  Response: string;
  Error?: string;
  Search?: MiniMovieDetails[];
  totalResults?: string;
  Title?: string;
  Plot?: string;
  Year?: string;
  Actors?: string;
  Ratings?: MovieRating[];
  Poster?: string;
}
