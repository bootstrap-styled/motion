'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderComponent = function renderComponent() {
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.Bounce;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(EffectComponent, props)
  ));
}; /**
    * Testing our Bounces components
    */


describe('bounce', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <Bounce> tag', function () {
    var renderedComponent = renderComponent(_index.Bounce, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceDown> tag', function () {
    var renderedComponent = renderComponent(_index.BounceDown, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceUp> tag', function () {
    var renderedComponent = renderComponent(_index.BounceUp, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceLeft> tag', function () {
    var renderedComponent = renderComponent(_index.BounceLeft, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceRight> tag', function () {
    var renderedComponent = renderComponent(_index.BounceRight, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});