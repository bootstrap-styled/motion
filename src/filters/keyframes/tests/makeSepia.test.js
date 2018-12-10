import makeSepia from '../makeSepia';

describe('makeSepia', () => {
  const amplification = '1';
  describe('makeSepia', () => {
    it('should returns an object', () => {
      expect(typeof makeSepia({ amplification })).toBe('object');
    });
  });
});
