/**
 * Testing our styled Slides utils
 */

import makeSlideUp from '../makeSlideUp';

describe('makeSlideUp', () => {
  const distance = '10px';
  describe('makeSlideUp', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideUp({ distance })).toBe('object');
    });
  });
});
