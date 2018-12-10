/**
 * Testing our styled Rotates utils
 */

import makeRotateRight from '../makeRotateRight';

describe('makeRotateRight', () => {
  const rotation = '45deg';
  describe('makeRotateRight', () => {
    it('should returns an object', () => {
      expect(typeof makeRotateRight({ rotation })).toBe('object');
    });
  });
});
