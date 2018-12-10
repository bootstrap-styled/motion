/**
 * Testing our styled Filter utils
 */

import makeInvert from '../makeInvert';

describe('makeInvert', () => {
  const amplification = '1';
  describe('makeInvert', () => {
    it('should returns an object', () => {
      expect(typeof makeInvert({ amplification })).toBe('object');
    });
  });
});
