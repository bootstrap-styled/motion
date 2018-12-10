import makeFadeInUp from '../makeFadeInUp';

describe('styledFade', () => {
  const distance = '10px';
  describe('makeFadeInUp', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeInUp({ distance })).toBe('object');
    });
  });
});
