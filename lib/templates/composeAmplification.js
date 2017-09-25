'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = composeAmplification;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function composeAmplification(AbstractAnim, variableName) {
  var Amplification = function Amplification(props) {
    var amplification = props.amplification,
        theme = props.theme,
        rest = _objectWithoutProperties(props, ['amplification', 'theme']);

    return _react2.default.createElement(AbstractAnim, _extends({
      amplification: amplification || theme[variableName]
    }, rest));
  };

  /* eslint-disable react/require-default-props */
  Amplification.propTypes = {
    theme: _propTypes2.default.object,
    amplification: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  };
  /* eslint-enable react/require-default-props */

  return (0, _styledComponents.withTheme)(Amplification);
}
module.exports = exports['default'];