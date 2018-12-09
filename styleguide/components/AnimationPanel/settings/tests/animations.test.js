/**
 * Testing our animations settings
 */
import animations from '../animations';

describe('animations', () => {
  it('should contains valid animations', () => {
    Object.keys(animations).forEach((animation) => {
      expect(animation).toBeDefined();
    });
  });
});
