import makeBounceRight from '../makeBounceRight';

describe('makeBounceRight', () => {
  const distance = '10px';

  describe('makeBounceRight', () => {
    it('should returns an object', () => {
      expect(typeof makeBounceRight({ distance })).toBe('object');
    });
  });
});
