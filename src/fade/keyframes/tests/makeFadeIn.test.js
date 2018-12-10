/**
 * Testing our styled Fades utils
 */

import makeFadeIn from '../makeFadeIn';

describe('styledFade', () => {
  describe('makeFadeIn', () => {
    it('should returns an object', () => {
      expect(typeof makeFadeIn()).toBe('object');
    });
  });
});
