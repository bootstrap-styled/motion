/**
 * Testing our styled Rotates utils
 */

import makeRotateLeft from '../makeRotateLeft';

describe('makeRotateLeft', () => {
  const rotation = '45deg';
  describe('makeRotateLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateLeft({ rotation })).toBe('object');
    });
  });
});
