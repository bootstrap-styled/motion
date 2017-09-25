'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _composeRotation = require('../composeRotation');

var _composeRotation2 = _interopRequireDefault(_composeRotation);

var _composeAnimation = require('../composeAnimation');

var _composeAnimation2 = _interopRequireDefault(_composeAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our composeRotation HOC
 */
describe('composeRotation', function () {
  var makeEffect = function makeEffect() {
    // eslint-disable-line arrow-body-style
    return {
      from: {
        width: '0'
      },
      to: {
        width: '100%'
      }
    };
  };
  var RotationAnimation = void 0;
  beforeAll(function () {
    RotationAnimation = (0, _composeRotation2.default)((0, _composeAnimation2.default)(makeEffect), '$motion-rotate-in-rotation');
  });

  it('should render an <RotationAnimation /> with user distance', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _theme2.default },
      _react2.default.createElement(
        RotationAnimation,
        { rotation: '10deg' },
        'Test'
      )
    ));
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <RotationAnimation /> with theme distance', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _theme2.default },
      _react2.default.createElement(
        RotationAnimation,
        null,
        'Test'
      )
    ));
    expect(renderedComponent.length).toBe(1);
  });
});