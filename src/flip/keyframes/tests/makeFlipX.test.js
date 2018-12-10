/**
 * Testing our styled Flips utils
 */

import makeFlipX from '../makeFlipX';

describe('makeFlipX', () => {
  const perspective = '64px';
  describe('makeFlipX', () => {
    it('should returns an object', () => {
      expect(typeof makeFlipX({ perspective })).toBe('object');
    });
  });
});
