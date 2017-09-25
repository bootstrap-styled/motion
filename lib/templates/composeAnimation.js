'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = composeAnimation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _immutable = require('immutable');

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _typeEnums = require('../typeEnums');

var _makeKeyframe = require('../makeKeyframe');

var _makeKeyframe2 = _interopRequireDefault(_makeKeyframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function composeAnimation(makeAnimation) {
  // eslint-disable-next-line react/prefer-stateless-function
  var HOC = function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        defaults: {},
        styles: {}
      }, _this.componentWillMount = function () {
        _this.updateDefaultsFromTheme(_this.updateAnimationStyles);
      }, _this.updateDefaultsFromTheme = function (cb) {
        var theme = _this.props.theme;
        /* eslint-disable dot-notation */

        _this.setState({
          defaults: {
            duration: theme['$motion-duration']['md'],
            timingFunction: theme['$motion-timing-function']['ease'],
            delay: theme['$motion-delay']['xs'],
            direction: theme['$motion-direction']['normal'],
            iterations: theme['$motion-iterations']['xs'],
            fillMode: theme['$motion-fill-mode']['none'],
            playState: theme['$motion-play-state']['running'],
            distance: theme['$motion-distance']['md'],
            rotation: theme['$motion-degree']['md'],
            perspective: theme['$motion-perspective']['xs'],
            backfaceVisibility: theme['$motion-backface-visibility']['hidden'],
            amplification: theme['$motion-amplification']['md']
          }
        }, cb);
        /* eslint-enable dot-notation */
      }, _this.updateAnimationStyles = function () {
        var props = _this.props;
        var defaults = _this.state.defaults;

        var duration = props.duration || defaults.duration;
        var timingFunction = props.timingFunction || defaults.timingFunction;
        var delay = props.delay || defaults.delay;
        var direction = props.direction || defaults.direction;
        var iterations = props.iterations || defaults.iterations;
        var fillMode = props.fillMode || defaults.fillMode;
        var playState = props.playState || defaults.playState;

        var distance = props.distance || defaults.distance;

        var rotation = props.degree || defaults.rotation;
        var perspective = props.perspective || defaults.perspective;

        var backfaceVisibility = props.backfaceVisibility || defaults.backfaceVisibility;

        var amplification = props.amplification || defaults.amplification;

        var keyframeName = (0, _makeKeyframe2.default)(_this.makeAnimation, { distance: distance, rotation: rotation, perspective: perspective, amplification: amplification }, props.keyframes);

        var styles = {};
        styles.animation = keyframeName + ' ' + duration + ' ' + timingFunction + ' ' + delay + ' ' + iterations + ' ' + direction + ' ' + fillMode + ' ' + playState;

        if (_typeEnums.TYPE_ROTATE === _this.makeAnimation.type) {
          styles.backfaceVisibility = backfaceVisibility;
        }

        _this.setState({
          styles: styles
        });
      }, _this.makeAnimation = makeAnimation, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /* eslint-disable react/no-unused-prop-types, react/require-default-props */

    /* eslint-enable react/no-unused-prop-types, react/require-default-props */

    _createClass(HOC, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if ((0, _immutable.fromJS)(newProps.theme).hashCode() !== (0, _immutable.fromJS)(this.props.theme).hashCode()) {
          this.updateDefaultsFromTheme(this.updateAnimationStyles);
        } else {
          this.updateAnimationStyles();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _omit = (0, _lodash2.default)(this.props, ['theme', 'duration', 'timingFunction', 'delay', 'iterations', 'direction', 'fillMode', 'playState', 'keyframes', 'distance', 'degree', 'perspective', 'backfaceVisibility', 'amplification', 'rotation', 'innerRef']),
            className = _omit.className,
            children = _omit.children,
            inline = _omit.inline,
            cssModule = _omit.cssModule,
            rest = _objectWithoutProperties(_omit, ['className', 'children', 'inline', 'cssModule']);

        return _react2.default.createElement(
          'span',
          _extends({
            style: this.state.styles,
            className: (0, _mapToCssModules2.default)((0, _classnames2.default)({ 'd-inline-block': inline }, className), cssModule)
          }, rest),
          children
        );
      }
    }]);

    return HOC;
  }(_react2.default.Component);

  HOC.defaultProps = {
    inline: true
  };
  HOC.propTypes = {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    theme: _propTypes2.default.object.isRequired,
    inline: _propTypes2.default.bool,
    duration: _propTypes2.default.string,
    timingFunction: _propTypes2.default.string,
    delay: _propTypes2.default.string,
    direction: _propTypes2.default.string,
    iterations: _propTypes2.default.string,
    fillMode: _propTypes2.default.string,
    playState: _propTypes2.default.string,

    keyframes: _propTypes2.default.object,

    distance: _propTypes2.default.string,
    degree: _propTypes2.default.string,
    perspective: _propTypes2.default.string,
    backfaceVisibility: _propTypes2.default.string,

    amplification: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  };


  return (0, _styledComponents.withTheme)(HOC);
}
module.exports = exports['default'];