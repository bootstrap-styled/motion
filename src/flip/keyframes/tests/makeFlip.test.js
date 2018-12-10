/**
 * Testing our styled Flips utils
 */

import makeFlip from '../makeFlip';

describe('makeFlip', () => {
  const perspective = '64px';
  describe('makeFlip', () => {
    it('should returns an object', () => {
      expect(typeof makeFlip({ perspective })).toBe('object');
    });
  });
});
