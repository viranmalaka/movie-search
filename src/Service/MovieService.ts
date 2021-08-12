import APIService from './APIService';
import OmdbResponse from '../Models/OmdbResponse';
import MovieDetails from '../Models/MovieDetails';
import { OMDB_API_SERVICE_URL } from '../Common/constants';

export default class MovieService {
  static instance: MovieService;

  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  static getInstance(): MovieService {
    if (!this.instance) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.instance = new MovieService(process.env.REACT_APP_OMDB_API_KEY);
    }
    return this.instance;
  }

  async search(query: string, page: number): Promise<OmdbResponse> {
    try {
      const result = await APIService.get(OMDB_API_SERVICE_URL, { s: query, page, apikey: this.apiKey });
      return {
        Response: result.Response,
        Search: result.Search,
        totalResults: result.totalResults,
        Error: result.Error,
      };
    } catch (error) {
      return {
        Error: error.Error,
        Response: error.Response,
      };
    }
  }

  async getMovieById(id: string): Promise<MovieDetails | OmdbResponse> {
    try {
      const result = await APIService.get(OMDB_API_SERVICE_URL, { i: id, apikey: this.apiKey });
      return {
        Actors: result.Actors || '',
        Plot: result.Plot || '',
        Poster: result.Poster || '',
        Ratings: result.Ratings || [],
        Title: result.Title || '',
        Year: result.Year || '',
        Response: result.Response || '',
      };
    } catch (error) {
      return {
        Error: error.Error,
        Response: error.Response,
      };
    }
  }
}
