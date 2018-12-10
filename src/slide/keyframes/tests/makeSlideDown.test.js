/**
 * Testing our styled Slides utils
 */

import makeSlideDown from '../makeSlideDown';

describe('makeSlideDown', () => {
  const distance = '10px';
  describe('makeSlideDown', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideDown({ distance })).toBe('object');
    });
  });
});
