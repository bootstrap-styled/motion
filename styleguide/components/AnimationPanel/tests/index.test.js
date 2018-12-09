/**
 * Testing our AnimationPanel export
 */
const exports = require('../index');

describe('AnimationPanel', () => {
  it('should contains defined exports', () => {
    Object.keys(exports).forEach((exported) => {
      expect(exports[exported]).toBeDefined();
    });
  });
});
