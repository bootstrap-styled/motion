/**
 * Testing our styled Special utils
 */

import makeRubber from '../makeRubber';

describe('makeRubber', () => {
  const amplification = '1';
  describe('makeRubber', () => {
    it('should returns an object', () => {
      expect(typeof makeRubber({ amplification })).toBe('object');
    });
  });
});
