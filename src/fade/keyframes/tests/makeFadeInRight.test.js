import makeFadeInRight from '../makeFadeInRight';

describe('styledFade', () => {
  const distance = '10px';
  describe('makeFadeInRight', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeInRight({ distance })).toBe('object');
    });
  });
});
