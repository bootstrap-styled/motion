'use strict';

var _exports = require('../index');

describe('exports', function () {
  Object.keys(_exports).forEach(function (key) {
    it(key + ' should be defined', function () {
      expect(_exports[key]).toBeDefined();
    });
  });
});