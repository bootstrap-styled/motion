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
  var EffectComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.Blur;
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(EffectComponent, props)
  ));
}; /**
    * Testing our Filters components
    */


describe('filters', function () {
  var children = void 0;
  beforeAll(function () {
    children = _react2.default.createElement(
      'h1',
      null,
      'Test'
    );
  });

  it('should render a <Blur> tag', function () {
    var renderedComponent = renderComponent(_index.Blur, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Contrast> tag', function () {
    var renderedComponent = renderComponent(_index.Contrast, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Brightness> tag', function () {
    var renderedComponent = renderComponent(_index.Brightness, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Grayscale> tag', function () {
    var renderedComponent = renderComponent(_index.Grayscale, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <HueRotate> tag', function () {
    var renderedComponent = renderComponent(_index.HueRotate, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Invert> tag', function () {
    var renderedComponent = renderComponent(_index.Invert, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Opacity> tag', function () {
    var renderedComponent = renderComponent(_index.Opacity, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Saturate> tag', function () {
    var renderedComponent = renderComponent(_index.Saturate, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Sepia> tag', function () {
    var renderedComponent = renderComponent(_index.Sepia, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Dropshadow> tag', function () {
    var renderedComponent = renderComponent(_index.Dropshadow, {
      children: children
    });
    expect(renderedComponent.length).toBe(1);
  });
});