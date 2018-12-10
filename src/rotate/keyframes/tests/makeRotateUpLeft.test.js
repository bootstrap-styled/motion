/**
 * Testing our styled Rotates utils
 */

import makeRotateUpLeft from '../makeRotateUpLeft';

describe('makeRotateUpLeft', () => {
  const rotation = '45deg';
  describe('makeRotateUpLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateUpLeft({ rotation })).toBe('object');
    });
  });
});
