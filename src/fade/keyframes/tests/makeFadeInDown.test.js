import makeFadeInDown from '../makeFadeInDown';

describe('makeFadeInDown', () => {
  const distance = '10px';
  describe('makeFadeInDown', () => {
    it('should returns an object with params', () => {
      expect(typeof makeFadeInDown({ distance })).toBe('object');
    });
  });
});
