/**
 * Testing our styled Special utils
 */

import makePulse from '../makePulse';

describe('makePulse', () => {
  const amplification = '1';
  describe('makePulse', () => {
    it('should returns an object', () => {
      expect(typeof makePulse({ amplification })).toBe('object');
    });
  });
});
