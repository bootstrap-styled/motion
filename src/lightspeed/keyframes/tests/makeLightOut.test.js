/**
 * Testing our styled Lights utils
 */

import makeLightOut from '../makeLightOut';

describe('makeLightOut', () => {
  const distance = '10px';
  const rotation = '30deg';
  describe('makeLightOut', () => {
    it('should returns an object', () => {
      expect(typeof makeLightOut({ distance, rotation })).toBe('object');
    });
  });
});
