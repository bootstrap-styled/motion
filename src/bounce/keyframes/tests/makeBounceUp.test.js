import makeBounceUp from '../makeBounceUp';

describe('makeBounceUp', () => {
  const distance = '10px';

  describe('makeBounceUp', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceUp({ distance })).toBe('object');
    });
  });
});
