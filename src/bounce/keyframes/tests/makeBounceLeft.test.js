import makeBounceLeft from '../makeBounceLeft';

describe('makeBounceLeft', () => {
  const distance = '10px';

  describe('makeBounceLeft', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceLeft({ distance })).toBe('object');
    });
  });
});
