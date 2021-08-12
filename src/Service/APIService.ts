import axios, { AxiosError, AxiosResponse } from 'axios';
import OmdbResponse from '../Models/OmdbResponse';

function responseBodyConverter(res: AxiosResponse) {
  return res.data;
}

function errorBodyConverter(error: AxiosError) {
  throw error.response && error.response.data;
}

export default class APIService {
  static async get(url: string, params: unknown): Promise<OmdbResponse> {
    return axios.get(url, { params }).then(responseBodyConverter).catch(errorBodyConverter);
  }
}
