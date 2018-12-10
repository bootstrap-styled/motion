import makeFadeInLeft from '../makeFadeInLeft';

describe('styledFade', () => {
  const distance = '10px';
  describe('makeFadeInLeft', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeInLeft({ distance })).toBe('object');
    });
  });
});
