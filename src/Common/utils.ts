import { OMDB_ERROR_RESPONSE, OMDB_SUCCESS_RESPONSE } from './constants';

export const isSuccessResponse = (response: string): boolean => {
  return response === OMDB_SUCCESS_RESPONSE;
};

export const isErrorResponse = (response: string): boolean => {
  return response === OMDB_ERROR_RESPONSE;
};
