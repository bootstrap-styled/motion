/**
 * Testing our styled Lights utils
 */

import makeLightIn from '../makeLightIn';

describe('makeLightIn', () => {
  const distance = '10px';
  const rotation = '30deg';
  describe('makeLightInResult', () => {
    it('should returns an object', () => {
      expect(typeof makeLightIn({ distance, rotation })).toBe('object');
    });
  });
});
