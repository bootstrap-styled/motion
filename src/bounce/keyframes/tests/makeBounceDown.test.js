import makeBounceDown from '../makeBounceDown';

describe('makeBounceDown', () => {
  const distance = '10px';

  describe('makeBounceDown', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceDown({ distance })).toBe('object');
    });
  });
});
