/**
 * Testing our styled Special utils
 */

import makeEntrance from '../makeEntrance';

describe('makeEntrance', () => {
  const amplification = '1';
  describe('makeEntrance', () => {
    it('should returns an object', () => {
      expect(typeof makeEntrance({ amplification })).toBe('object');
    });
  });
});
