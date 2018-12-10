/**
 * Testing our styled Filter utils
 */

import makeOpacity from '../makeOpacity';

describe('makeOpacity', () => {
  const amplification = '1';
  describe('makeOpacity', () => {
    it('should returns an object', () => {
      expect(typeof makeOpacity({ amplification })).toBe('object');
    });
  });
});
