/**
 * Testing our styled Special utils
 */

import makeRollIn from '../makeRollIn';

describe('makeRollIn', () => {
  const distance = '10px';
  const amplification = '1';
  describe('makeRollIn', () => {
    it('should returns an object', () => {
      expect(typeof makeRollIn({ distance, amplification })).toBe('object');
    });
  });
});
