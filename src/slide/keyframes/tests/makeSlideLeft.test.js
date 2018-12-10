/**
 * Testing our styled Slides utils
 */

import makeSlideLeft from '../makeSlideLeft';

describe('makeSlideLeft', () => {
  const distance = '10px';
  describe('makeSlideLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideLeft({ distance })).toBe('object');
    });
  });
});
