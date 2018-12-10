/**
 * Testing our styled Filter utils
 */

import makeGrayScale from '../makeGrayScale';

describe('makeGrayScale', () => {
  const amplification = '1';
  describe('makeGrayScale', () => {
    it('should returns an object', () => {
      expect(typeof makeGrayScale({ amplification })).toBe('object');
    });
  });
});
