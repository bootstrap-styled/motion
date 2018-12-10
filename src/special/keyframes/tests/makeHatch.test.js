/**
 * Testing our styled Special utils
 */

import makeHatch from '../makeHatch';

describe('makeHatch', () => {
  const amplification = '1';
  describe('makeHatch', () => {
    it('should returns an object', () => {
      expect(typeof makeHatch({ amplification })).toBe('object');
    });
  });
});
