/**
 * Testing our styled Slides utils
 */

import makeSlideRight from '../makeSlideRight';

describe('makeSlideRight', () => {
  const distance = '10px';
  describe('makeSlideRight', () => {
    it('should returns an object', () => {
      expect(typeof makeSlideRight({ distance })).toBe('object');
    });
  });
});
