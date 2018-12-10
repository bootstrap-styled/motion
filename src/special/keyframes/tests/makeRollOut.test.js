/**
 * Testing our styled Special utils
 */

import makeRollOut from '../makeRollOut';

describe('makeRollOut', () => {
  const distance = '10px';
  const amplification = '1';
  describe('makeRollOut', () => {
    it('should returns an object', () => {
      expect(typeof makeRollOut({ distance, amplification })).toBe('object');
    });
  });
});
