/**
 * Testing our styled Rotates utils
 */

import makeRotateIn from '../makeRotateIn';

describe('makeRotateIn', () => {
  const rotation = '45deg';
  describe('makeRotateIn', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateIn({ rotation })).toBe('object');
    });
  });
});
