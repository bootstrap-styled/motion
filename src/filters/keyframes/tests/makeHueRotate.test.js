/**
 * Testing our styled Filter utils
 */

import makeHueRotate from '../makeHueRotate';

describe('makeHueRotate', () => {
  const rotation = '45deg';
  describe('makeHueRotate', () => {
    it('should returns an object', () => {
      expect(typeof makeHueRotate({ rotation })).toBe('object');
    });
  });
});
