import makeBlur from '../makeBlur';

describe('makeBlur', () => {
  const distance = '10px';
  describe('makeBlur', () => {
    it('should returns an object', () => {
      expect(typeof makeBlur({ distance })).toBe('object');
    });
  });
});
