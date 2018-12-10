/**
 * Testing our styled Special utils
 */

import makeHinge from '../makeHinge';

describe('makeHinge', () => {
  const amplification = '1';
  describe('makeHinge', () => {
    it('should returns an object', () => {
      expect(typeof makeHinge({ amplification })).toBe('object');
    });
  });
});
