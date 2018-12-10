/**
 * Testing our styled Slides utils
 */

import makeSlideRightLeft from '../makeSlideRightLeft';

describe('makeSlideRightLeft', () => {
  const distance = '10px';
  describe('makeSlideRightLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideRightLeft({ distance })).toBe('object');
    });
  });
});
