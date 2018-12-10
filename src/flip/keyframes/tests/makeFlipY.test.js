/**
 * Testing our styled Flips utils
 */

import makeFlipY from '../makeFlipY';

describe('makeFlipY', () => {
  const perspective = '64px';
  describe('makeFlipY', () => {
    it('should returns an object', () => {
      expect(typeof makeFlipY({ perspective })).toBe('object');
    });
  });
});
