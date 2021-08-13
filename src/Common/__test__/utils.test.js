import { isErrorResponse, isSuccessResponse } from '../utils';

describe('test utils', () => {
  describe('test isSuccessResponse', () => {
    it('should return true if the response is True', () => {
      expect(isSuccessResponse('True')).toBeTruthy();
    });
    it('should return false if the response is not True', () => {
      expect(isSuccessResponse('False')).toBeFalsy();
      expect(isSuccessResponse('anything')).toBeFalsy();
    });
  });

  describe('test isErrorResponse', () => {
    it('should return true if the response is False', () => {
      expect(isErrorResponse('False')).toBeTruthy();
    });
    it('should return false if the response is not False', () => {
      expect(isErrorResponse('True')).toBeFalsy();
      expect(isErrorResponse('anything')).toBeFalsy();
    });
  });
});
