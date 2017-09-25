import theme, { makeTheme } from '../theme';

describe('theme', () => {
  describe('default theme', () => {
    it('should have every values defined', () => {
      Object.keys(theme).forEach((key) => {
        expect(theme[key]).toBeDefined();
      });
    });
  });

  describe('makeTheme', () => {
    it('should return a default theme', () => {
      const newTheme = makeTheme();
      Object.keys(newTheme).forEach((key) => {
        expect(newTheme[key]).toBeDefined();
      });
    });
    it('should return an extended theme', () => {
      const notDefaultTheme = makeTheme({
        '$motion-flip-perspective': '74px',
      });
      expect(notDefaultTheme['$motion-flip-perspective'] !== theme['$motion-flip-perspective']).toBe(true);
      expect(makeTheme()['$motion-flip-perspective'] === theme['$motion-flip-perspective']).toBe(true);
    });
  });
});
