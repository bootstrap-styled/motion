const exports = require('../index');

describe('exports', () => {
  Object.keys(exports).forEach((key) => {
    it(`${key} should be defined`, () => {
      expect(exports[key]).toBeDefined();
    });
  });
});
