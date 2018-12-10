/**
 * Testing our styled Special utils
 */

import makeSwing from '../makeSwing';

describe('makeSwing', () => {
  const amplification = '1';
  describe('makeSwing', () => {
    it('should returns an object', () => {
      expect(typeof makeSwing({ amplification })).toBe('object');
    });
  });
});
