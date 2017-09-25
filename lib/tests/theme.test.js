'use strict';

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('theme', function () {
  describe('default theme', function () {
    it('should have every values defined', function () {
      Object.keys(_theme2.default).forEach(function (key) {
        expect(_theme2.default[key]).toBeDefined();
      });
    });
  });

  describe('makeTheme', function () {
    it('should return a default theme', function () {
      var newTheme = (0, _theme.makeTheme)();
      Object.keys(newTheme).forEach(function (key) {
        expect(newTheme[key]).toBeDefined();
      });
    });
    it('should return an extended theme', function () {
      var notDefaultTheme = (0, _theme.makeTheme)({
        '$motion-flip-perspective': '74px'
      });
      expect(notDefaultTheme['$motion-flip-perspective'] !== _theme2.default['$motion-flip-perspective']).toBe(true);
      expect((0, _theme.makeTheme)()['$motion-flip-perspective'] === _theme2.default['$motion-flip-perspective']).toBe(true);
    });
  });
});