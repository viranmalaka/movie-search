import MovieRating from './MovieRating';

export default interface MovieDetails {
  Title: string;
  Plot: string;
  Year: string;
  Actors: string;
  Ratings: MovieRating[];
  Poster: string;
  Response: string;
}
