/**
 * Testing our styled Filter utils
 */

import makeSaturate from '../makeSaturate';

describe('makeSaturate', () => {
  const amplification = '1';
  describe('makeSaturate', () => {
    it('should returns an object', () => {
      expect(typeof makeSaturate({ amplification })).toBe('object');
    });
  });
});
