/**
 * Testing our styled Filter utils
 */

import makeContrast from '../makeContrast';

describe('makeContrast', () => {
  const amplification = '1';
  describe('makeContrast', () => {
    it('should returns an object', () => {
      expect(typeof makeContrast({ amplification })).toBe('object');
    });
  });
});
