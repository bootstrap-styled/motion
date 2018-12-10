/**
 * Testing our styled Filter utils
 */

import makeBrightness from '../makeBrightness';

describe('styledFilter', () => {
  const amplification = '1';
  describe('makeBrightness', () => {
    it('should returns an object', () => {
      expect(typeof makeBrightness({ amplification })).toBe('object');
    });
  });
});
