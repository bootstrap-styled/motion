/**
 * Testing our styled Filter utils
 */

import makeDropShadow from '../makeDropShadow';

describe('makeDropShadow', () => {
  const amplification = '1';
  describe('makeDropShadow', () => {
    it('should returns an object', () => {
      expect(typeof makeDropShadow({ amplification })).toBe('object');
    });
  });
});
