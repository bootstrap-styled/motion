/**
 * Testing our styled Rotates utils
 */

import makeRotateUpRight from '../makeRotateUpRight';

describe('makeRotateUpRight', () => {
  const rotation = '45deg';
  describe('makeRotateUpRight', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateUpRight({ rotation })).toBe('object');
    });
  });
});
