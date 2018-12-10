/**
 * Testing our styled Special utils
 */

import makeExpandUp from '../makeEntrance';

describe('makeExpandUp', () => {
  const amplification = '1';
  describe('makeExpandUp', () => {
    it('should returns an object', () => {
      expect(typeof makeExpandUp({ amplification })).toBe('object');
    });
  });
});
