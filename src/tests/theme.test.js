import theme, { makeTheme } from '../theme';

describe('theme', () => {
  describe('default theme', () => {
    it('should have every values defined', () => {
      Object.keys(theme.motion).forEach((key) => {
        expect(theme.motion[key]).toBeDefined();
      });
    });
  });

  describe('makeTheme', () => {
    it('should return a default theme', () => {
      const newTheme = makeTheme();
      Object.keys(newTheme.motion).forEach((key) => {
        expect(newTheme.motion[key]).toBeDefined();
      });
    });
    it('should return an extended theme', () => {
      const defaultTheme = makeTheme();
      const notDefaultTheme = makeTheme({
        motion: {
          '$motion-flip-perspective': '73px',
        },
      });
      expect(notDefaultTheme.motion['$motion-flip-perspective'] !== defaultTheme.motion['$motion-flip-perspective']).toBe(true);
      expect(defaultTheme.motion['$motion-flip-perspective'] === theme.motion['$motion-flip-perspective']).toBe(true);
    });
  });
});
