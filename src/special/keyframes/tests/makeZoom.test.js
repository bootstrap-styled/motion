/**
 * Testing our styled Special utils
 */

import makeZoom from '../makeZoom';

describe('makeZoom', () => {
  const amplification = '1';
  describe('makeZoom', () => {
    it('should returns an object', () => {
      expect(typeof makeZoom({ amplification })).toBe('object');
    });
  });
});
