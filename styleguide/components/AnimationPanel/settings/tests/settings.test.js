/**
 * Testing our settings component
 */
import settings from '../settings';

describe('animations settings', () => {
  it('should contains valid object', () => {
    Object.keys(settings).forEach((item) => {
      expect(item).toBeDefined();
    });
  });
});
