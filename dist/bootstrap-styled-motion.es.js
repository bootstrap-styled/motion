import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, withTheme } from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { fromJS } from 'immutable';
import mapToCssModules from 'map-to-css-modules';

function makeBlur(_ref) {
  var distance = _ref.distance;
  return {
    '0%': {
      filter: 'blur(0px)'
    },
    '100%': {
      filter: 'blur(' + distance + ')'
    }
  };
}
function makeOpacity(_ref2) {
  var amplification = _ref2.amplification;
  return {
    '0%': {
      filter: 'opacity(0%)'
    },
    '100%': {
      filter: 'opacity(' + amplification * 100 + '%)'
    }
  };
}
function makeContrast(_ref3) {
  var amplification = _ref3.amplification;
  return {
    '0%': {
      filter: 'contrast(0%)'
    },
    '100%': {
      filter: 'contrast(' + amplification * 100 + '%)'
    }
  };
}
function makeBrightness(_ref4) {
  var amplification = _ref4.amplification;
  return {
    '0%': {
      filter: 'brightness(0%)'
    },
    '100%': {
      filter: 'brightness(' + amplification * 100 + '%)'
    }
  };
}
function makeGrayscale(_ref5) {
  var amplification = _ref5.amplification;
  return {
    '0%': {
      filter: 'grayscale(0%)'
    },
    '100%': {
      filter: 'grayscale(' + amplification * 100 + '%)'
    }
  };
}
function makeHueRotate(_ref6) {
  var rotation = _ref6.rotation;
  return {
    '0%': {
      filter: 'hue-rotate(0deg)'
    },
    '100%': {
      filter: 'hue-rotate(' + rotation + ')'
    }
  };
}
function makeInvert(_ref7) {
  var amplification = _ref7.amplification;
  return {
    '0%': {
      filter: 'invert(0%)'
    },
    '100%': {
      filter: 'invert(' + amplification * 100 + '%)'
    }
  };
}
function makeSaturate(_ref8) {
  var amplification = _ref8.amplification;
  return {
    '0%': {
      filter: 'saturate(0%)'
    },
    '100%': {
      filter: 'saturate(' + amplification * 8 + '%)'
    }
  };
}
function makeSepia(_ref9) {
  var amplification = _ref9.amplification;
  return {
    '0%': {
      filter: 'sepia(0%)'
    },
    '100%': {
      filter: 'sepia(' + amplification * 100 + '%)'
    }
  };
}
function makeDropshadow(_ref10) {
  var amplification = _ref10.amplification;
  return {
    '0%': {
      filter: 'drop-shadow(0px 0px 0px #000)'
    },
    '100%': {
      filter: 'drop-shadow(' + amplification * 5 + 'px ' + amplification * 5 + 'px ' + amplification * 5 + 'px #000)'
    }
  };
}

var TYPE_ROTATE = 'TYPE_ROTATE';

function toHashCode(str) {
  var hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}
var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }
  function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };
        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }
    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;
        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }
    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }
      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }
  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }
  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };
  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };
  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };
  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var UnitUtils = function UnitUtils() {
  var _this = this;
  classCallCheck(this, UnitUtils);
  this.UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%'
  };
  this.math = {
    addition: function addition(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) + this.rmUnit(b) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) - this.rmUnit(b) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) * this.rmUnit(b) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) / this.rmUnit(b) + unit;
    }.bind(this)
  };
  this.detectUnit = function (value) {
    var ext = void 0;
    var valueStr = value.toString();
    if (valueStr.match(_this.UNIT.PX)) {
      ext = _this.UNIT.PX;
    } else if (valueStr.match(_this.UNIT.REM)) {
      ext = _this.UNIT.REM;
    } else if (valueStr.match(_this.UNIT.EM)) {
      ext = _this.UNIT.EM;
    } else if (valueStr.match(_this.UNIT.PERCENT)) {
      ext = _this.UNIT.PERCENT;
    } else if (!isNaN(value)) {
      return null;
    } else {
      throw new Error('detectUnit can\'t find unit for ' + value);
    }
    return ext;
  };
  this.rmUnit = function (value, unit) {
    var valueStr = value.toString();
    var ext = unit || _this.detectUnit(valueStr);
    var number = valueStr.replace(ext, '');
    return parseFloat(number);
  };
  this.toPercent = function (value) {
    var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + _this.UNIT.PERCENT;
  };
};
var index = new UnitUtils();

var keyframeRefList = [];
function toKeyframeString(obj) {
  var keyframeStr = '';
  Object.keys(obj).forEach(function (step) {
    keyframeStr += step + '{';
    Object.keys(obj[step]).forEach(function (cssAttr) {
      keyframeStr += cssAttr + ':' + obj[step][cssAttr] + ';';
    });
    keyframeStr += '}';
  });
  return keyframeStr;
}
function makeKeyframe(make, options) {
  var userKeyframes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var MAX_KEYFRAMES = 50;
  var merge = make(options);
  Object.keys(userKeyframes).forEach(function (key) {
    merge[key] = Object.assign({}, merge[key], userKeyframes[key]);
  });
  var hashCode = toHashCode(JSON.stringify(merge));
  var filtered = keyframeRefList.filter(function (keyframeRef) {
    return keyframeRef.hashCode === hashCode;
  });
  if (filtered.length) {
    return filtered[0].name;
  }
  var keyframeStr = toKeyframeString(merge);
  var name = keyframes(['', ''], keyframeStr);
  keyframeRefList.push({
    name: name,
    hashCode: hashCode
  });
  if (keyframeRefList.length > MAX_KEYFRAMES) {
    console.warn('You might have done a mistake because of current keyframes injection count. You currently have ' + keyframeRefList.length + ' keyframes in your page.');
  }
  return name;
}

var asyncGenerator$1 = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function composeAnimation(makeAnimation) {
  var HOC = function (_React$Component) {
    inherits(HOC, _React$Component);
    function HOC() {
      var _ref;
      var _temp, _this, _ret;
      classCallCheck$1(this, HOC);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        defaults: {},
        styles: {}
      }, _this.componentWillMount = function () {
        _this.updateDefaultsFromTheme(_this.updateAnimationStyles);
      }, _this.updateDefaultsFromTheme = function (cb) {
        var theme = _this.props.theme;
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
      }, _this.updateAnimationStyles = function () {
        var props = _this.props;
        var defaults$$1 = _this.state.defaults;
        var duration = props.duration || defaults$$1.duration;
        var timingFunction = props.timingFunction || defaults$$1.timingFunction;
        var delay = props.delay || defaults$$1.delay;
        var direction = props.direction || defaults$$1.direction;
        var iterations = props.iterations || defaults$$1.iterations;
        var fillMode = props.fillMode || defaults$$1.fillMode;
        var playState = props.playState || defaults$$1.playState;
        var distance = props.distance || defaults$$1.distance;
        var rotation = props.degree || defaults$$1.rotation;
        var perspective = props.perspective || defaults$$1.perspective;
        var backfaceVisibility = props.backfaceVisibility || defaults$$1.backfaceVisibility;
        var amplification = props.amplification || defaults$$1.amplification;
        var keyframeName = makeKeyframe(_this.makeAnimation, { distance: distance, rotation: rotation, perspective: perspective, amplification: amplification }, props.keyframes);
        var styles = {};
        styles.animation = keyframeName + ' ' + duration + ' ' + timingFunction + ' ' + delay + ' ' + iterations + ' ' + direction + ' ' + fillMode + ' ' + playState;
        if (TYPE_ROTATE === _this.makeAnimation.type) {
          styles.backfaceVisibility = backfaceVisibility;
        }
        _this.setState({
          styles: styles
        });
      }, _this.makeAnimation = makeAnimation, _temp), possibleConstructorReturn(_this, _ret);
    }
    createClass(HOC, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (fromJS(newProps.theme).hashCode() !== fromJS(this.props.theme).hashCode()) {
          this.updateDefaultsFromTheme(this.updateAnimationStyles);
        } else {
          this.updateAnimationStyles();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _omit = omit(this.props, ['theme', 'duration', 'timingFunction', 'delay', 'iterations', 'direction', 'fillMode', 'playState', 'keyframes', 'distance', 'degree', 'perspective', 'backfaceVisibility', 'amplification', 'rotation', 'innerRef']),
            className = _omit.className,
            children = _omit.children,
            inline = _omit.inline,
            cssModule = _omit.cssModule,
            rest = objectWithoutProperties(_omit, ['className', 'children', 'inline', 'cssModule']);
        return React.createElement(
          'span',
          _extends({
            style: this.state.styles,
            className: mapToCssModules(cn({ 'd-inline-block': inline }, className), cssModule)
          }, rest),
          children
        );
      }
    }]);
    return HOC;
  }(React.Component);
  HOC.defaultProps = {
    inline: true
  };
  HOC.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object.isRequired,
    inline: PropTypes.bool,
    duration: PropTypes.string,
    timingFunction: PropTypes.string,
    delay: PropTypes.string,
    direction: PropTypes.string,
    iterations: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string,
    keyframes: PropTypes.object,
    distance: PropTypes.string,
    degree: PropTypes.string,
    perspective: PropTypes.string,
    backfaceVisibility: PropTypes.string,
    amplification: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  return withTheme(HOC);
}

function composeAmplification(AbstractAnim, variableName) {
  var Amplification = function Amplification(props) {
    var amplification = props.amplification,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['amplification', 'theme']);
    return React.createElement(AbstractAnim, _extends({
      amplification: amplification || theme[variableName]
    }, rest));
  };
  Amplification.propTypes = {
    theme: PropTypes.object,
    amplification: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  return withTheme(Amplification);
}

function composeRotation(AbstractAnim, variableName) {
  var Rotation = function Rotation(props) {
    var rotation = props.rotation,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['rotation', 'theme']);
    var degree = rotation || theme[variableName];
    if (!isNaN(rotation) || degree.indexOf('deg') === -1) {
      degree = parseInt(degree, 10).toString() + 'deg';
    }
    return React.createElement(AbstractAnim, _extends({
      rotation: degree
    }, rest));
  };
  Rotation.propTypes = {
    theme: PropTypes.object,
    rotation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  return withTheme(Rotation);
}

function composeDistance(AbstractAnim, variableName) {
  var Distance = function Distance(props) {
    var distance = props.distance,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['distance', 'theme']);
    return React.createElement(AbstractAnim, _extends({
      distance: distance || theme[variableName]
    }, rest));
  };
  Distance.propTypes = {
    theme: PropTypes.object,
    distance: PropTypes.string
  };
  return withTheme(Distance);
}

var Blur = composeDistance(composeAnimation(makeBlur), '$motion-blur-distance');
var Contrast = composeAmplification(composeAnimation(makeContrast), '$motion-contrast-amplification');
var Brightness = composeAmplification(composeAnimation(makeBrightness), '$motion-brightness-amplification');
var Grayscale = composeAmplification(composeAnimation(makeGrayscale), '$motion-grayscale-amplification');
var HueRotate = composeRotation(composeAnimation(makeHueRotate), '$motion-hue-rotate-rotation');
var Invert = composeAmplification(composeAnimation(makeInvert), '$motion-invert-amplification');
var Opacity = composeAmplification(composeAnimation(makeOpacity), '$motion-opacity-amplification');
var Saturate = composeAmplification(composeAnimation(makeSaturate), '$motion-saturate-amplification');
var Sepia = composeAmplification(composeAnimation(makeSepia), '$motion-sepia-amplification');
var Dropshadow = composeAmplification(composeAnimation(makeDropshadow), '$motion-drop-shadow-amplification');

function makeBounce() {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)'
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)'
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)'
    },
    to: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)'
    }
  };
}
function makeBounceDown(_ref) {
  var distance = _ref.distance;
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    '60%': {
      transform: 'translate3d(0, 25px, 0)'
    },
    '75%': {
      transform: 'translate3d(0, -15px, 0)'
    },
    '90%': {
      transform: 'translate3d(0, 5px, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeBounceUp(_ref2) {
  var distance = _ref2.distance;
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    '60%': {
      transform: 'translate3d(0, -25px, 0)'
    },
    '75%': {
      transform: 'translate3d(0, 10px, 0)'
    },
    '90%': {
      transform: 'translate3d(0, -5px, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeBounceLeft(_ref3) {
  var distance = _ref3.distance;
  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(25px, 0, 0)'
    },
    '75%': {
      transform: 'translate3d(-10px, 0, 0)'
    },
    '90%': {
      transform: 'translate3d(5px, 0, 0)'
    },
    to: {
      transform: 'none'
    }
  };
}
function makeBounceRight(_ref4) {
  var distance = _ref4.distance;
  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(-25px, 0, 0)'
    },
    '75%': {
      transform: 'translate3d(10px, 0, 0)'
    },
    '90%': {
      transform: 'translate3d(-5px, 0, 0)'
    },
    to: {
      transform: 'none'
    }
  };
}

var Bounce = composeAmplification(composeAnimation(makeBounce), '$motion-bounce-amplification');
var BounceDown = composeDistance(composeAnimation(makeBounceDown), '$motion-bounce-down-distance');
var BounceUp = composeDistance(composeAnimation(makeBounceUp), '$motion-bounce-up-distance');
var BounceLeft = composeDistance(composeAnimation(makeBounceLeft), '$motion-bounce-left-distance');
var BounceRight = composeDistance(composeAnimation(makeBounceRight), '$motion-bounce-right-distance');

function makeFadeIn() {
  return {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  };
}
function makeFadeLeft(_ref) {
  var distance = _ref.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}
function makeFadeRight(_ref2) {
  var distance = _ref2.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}
function makeFadeDown(_ref3) {
  var distance = _ref3.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}
function makeFadeUp(_ref4) {
  var distance = _ref4.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}

var FadeIn = composeAnimation(makeFadeIn);
var FadeInDown = composeDistance(composeAnimation(makeFadeDown), '$motion-fade-in-down-distance');
var FadeInUp = composeDistance(composeAnimation(makeFadeUp), '$motion-fade-in-up-distance');
var FadeInLeft = composeDistance(composeAnimation(makeFadeLeft), '$motion-fade-in-left-distance');
var FadeInRight = composeDistance(composeAnimation(makeFadeRight), '$motion-fade-in-right-distance');

function makeFlip(_ref) {
  var perspective = _ref.perspective;
  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -360deg)',
      'animation-timing-function': 'ease-out'
    },
    '40%': {
      transform: 'perspective(' + perspective + ') translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      'animation-timing-function': 'ease-out'
    },
    '50%': {
      transform: 'perspective(' + perspective + ') translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px)',
      'animation-timing-function': 'ease-in'
    },
    '80%': {
      transform: 'perspective(' + perspective + ') scale3d(.90, .90, .90)',
      'animation-timing-function': 'ease-in'
    },
    to: {
      transform: 'perspective(' + perspective + ')',
      'animation-timing-function': 'ease-in'
    }
  };
}
makeFlip.type = TYPE_ROTATE;
function makeFlipX(_ref2) {
  var perspective = _ref2.perspective;
  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, 90deg)',
      'animation-timing-function': 'ease-in',
      opacity: 0
    },
    '40%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, -20deg)',
      'animation-timing-function': 'ease-in'
    },
    '60%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, 10deg)',
      opacity: 1
    },
    '80%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, -5deg)'
    },
    to: {
      transform: 'perspective(' + perspective + ')'
    }
  };
}
makeFlipX.type = TYPE_ROTATE;
function makeFlipY(_ref3) {
  var perspective = _ref3.perspective;
  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, 90deg)',
      'animation-timing-function': 'ease-in',
      opacity: 0
    },
    '40%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -20deg)',
      'animation-timing-function': 'ease-in'
    },
    '60%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, 10deg)',
      opacity: 1
    },
    '80%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -5deg)'
    },
    to: {
      transform: 'perspective(' + perspective + ')'
    }
  };
}
makeFlipY.type = TYPE_ROTATE;

function composePerspective(AbstractAnim, variableName) {
  var Perspective = function Perspective(props) {
    var perspective = props.perspective,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['perspective', 'theme']);
    return React.createElement(AbstractAnim, _extends({
      perspective: perspective || theme[variableName]
    }, rest));
  };
  Perspective.propTypes = {
    theme: PropTypes.object,
    perspective: PropTypes.string
  };
  return withTheme(Perspective);
}

var Flip = composePerspective(composeAnimation(makeFlip), '$motion-flip-perspective');
var FlipX = composePerspective(composeAnimation(makeFlipX), '$motion-flip-perspective');
var FlipY = composePerspective(composeAnimation(makeFlipY), '$motion-flip-perspective');

function makeLightIn(_ref) {
  var distance = _ref.distance,
      rotation = _ref.rotation;
  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0) skew(-' + rotation + ')',
      opacity: 0
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}
function makeLightOut(_ref2) {
  var distance = _ref2.distance,
      rotation = _ref2.rotation;
  return {
    from: {
      opacity: 1
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1
    },
    to: {
      transform: 'translate3d(-' + distance + ', 0, 0) skew(' + rotation + ')',
      opacity: 0
    }
  };
}

var LightIn = composeRotation(composeDistance(composeAnimation(makeLightIn), '$motion-light-in-distance'), '$motion-light-in-rotation');
var LightOut = composeRotation(composeDistance(composeAnimation(makeLightOut), '$motion-light-out-distance'), '$motion-light-out-rotation');

function makeRotateIn(_ref) {
  var rotation = _ref.rotation;
  return {
    from: {
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateIn.type = TYPE_ROTATE;
function makeRotateLeft(_ref2) {
  var rotation = _ref2.rotation;
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateLeft.type = TYPE_ROTATE;
function makeRotateRight(_ref3) {
  var rotation = _ref3.rotation;
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, ' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateRight.type = TYPE_ROTATE;
function makeRotateUpLeft(_ref4) {
  var rotation = _ref4.rotation;
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, ' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateUpLeft.type = TYPE_ROTATE;
function makeRotateUpRight(_ref5) {
  var rotation = _ref5.rotation;
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateUpRight.type = TYPE_ROTATE;

var RotateIn = composeRotation(composeAnimation(makeRotateIn), '$motion-rotate-in-rotation');
var RotateLeft = composeRotation(composeAnimation(makeRotateLeft), '$motion-rotate-left-rotation');
var RotateRight = composeRotation(composeAnimation(makeRotateRight), '$motion-rotate-right-rotation');
var RotateUpLeft = composeRotation(composeAnimation(makeRotateUpRight), '$motion-rotate-up-left-rotation');
var RotateUpRight = composeRotation(composeAnimation(makeRotateUpLeft), '$motion-rotate-up-right-rotation');

function makeSlideDown(_ref) {
  var distance = _ref.distance;
  return {
    from: {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideUp(_ref2) {
  var distance = _ref2.distance;
  return {
    from: {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideLeft(_ref3) {
  var distance = _ref3.distance;
  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideRight(_ref4) {
  var distance = _ref4.distance;
  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideRightLeft(_ref5) {
  var distance = _ref5.distance;
  return {
    from: {
      transform: 'translate3d(0, 0, 0)'
    },
    '50%': {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

var SlideUp = composeDistance(composeAnimation(makeSlideDown), '$motion-slide-up-distance');
var SlideDown = composeDistance(composeAnimation(makeSlideUp), '$motion-slide-down-distance');
var SlideRight = composeDistance(composeAnimation(makeSlideRight), '$motion-slide-right-distance');
var SlideLeft = composeDistance(composeAnimation(makeSlideLeft), '$motion-slide-left-distance');
var SlideRightLeft = composeDistance(composeAnimation(makeSlideRightLeft), '$motion-slide-right-left-distance');

function makeFlash() {
  return {
    from: {
      opacity: 1
    },
    '25%': {
      opacity: 0
    },
    '50%': {
      opacity: 1
    },
    '75%': {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  };
}
function makeRollIn(_ref) {
  var distance = _ref.distance,
      amplification = _ref.amplification;
  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0) rotate3d(0, 0, 1, -' + amplification * 120 + 'deg)',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}
makeRollIn.type = TYPE_ROTATE;
function makeRollOut(_ref2) {
  var distance = _ref2.distance,
      amplification = _ref2.amplification;
  return {
    from: {
      opacity: 1
    },
    to: {
      transform: 'translate3d(' + distance + ', 0, 0) rotate3d(0, 0, 1, ' + amplification * 120 + 'deg)',
      opacity: 0
    }
  };
}
makeRollOut.type = TYPE_ROTATE;
function makeRubber(_ref3) {
  var amplification = _ref3.amplification;
  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '30%': {
      transform: 'scale3d(' + amplification * 1.25 + ', ' + amplification * 0.75 + ', ' + amplification * 1 + ')'
    },
    '40%': {
      transform: 'scale3d(' + amplification * 0.75 + ', ' + amplification * 1.25 + ', ' + amplification * 1 + ')'
    },
    '50%': {
      transform: 'scale3d(' + amplification * 1.15 + ', ' + amplification * 0.85 + ', ' + amplification * 1 + ')'
    },
    '65%': {
      transform: 'scale3d(' + amplification * 0.95 + ', ' + amplification * 1.05 + ', ' + amplification * 1 + ')'
    },
    '75%': {
      transform: 'scale3d(' + amplification * 1.05 + ', ' + amplification * 0.95 + ', ' + amplification * 1 + ')'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}
function makeSwing(_ref4) {
  var amplification = _ref4.amplification;
  return {
    '20%': {
      transform: 'rotate3d(0, 0, 1, ' + amplification * 15 + 'deg)'
    },
    '40%': {
      transform: 'rotate3d(0, 0, 1, -' + amplification * 10 + 'deg)'
    },
    '60%': {
      transform: 'rotate3d(0, 0, 1, ' + amplification * 5 + 'deg)'
    },
    '80%': {
      transform: 'rotate3d(0, 0, 1, -' + amplification * 5 + 'deg)'
    },
    to: {
      transform: 'rotate3d(0, 0, 1, 0deg)'
    }
  };
}
makeSwing.type = TYPE_ROTATE;
function makeZoom(_ref5) {
  var amplification = _ref5.amplification;
  return {
    from: {
      opacity: 0,
      transform: 'scale3d(' + amplification * 0.4 + ', ' + amplification * 0.4 + ', ' + amplification * 0.4 + ')'
    },
    to: {
      opacity: 1
    }
  };
}
function makeHinge(_ref6) {
  var amplification = _ref6.amplification;
  return {
    from: {
      'transform-origin': 'top-left',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '20%, 40%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, ' + amplification * 80 + 'deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '60%, 80%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, ' + amplification * 20 + 'deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    to: {
      transform: 'translate3d(0, ' + amplification * 700 + 'px, 0)',
      opacity: 0
    }
  };
}
function makePulse(_ref7) {
  var amplification = _ref7.amplification;
  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '50%': {
      transform: 'scale3d(' + amplification * 1.4 + ', ' + amplification * 1.4 + ', ' + amplification * 1.4 + ')'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}
function makeExpandUp(_ref8) {
  var amplification = _ref8.amplification;
  return {
    '0%': {
      transform: 'translateY(100%) scale(' + amplification * 0.6 + ') scaleY(' + amplification * 0.5 + ')'
    },
    '60%': {
      transform: 'translateY(-' + amplification * 7 + '%) scaleY(' + amplification * 1.12 + ')'
    },
    '75%': {
      transform: 'translateY(' + amplification * 3 + '%)'
    },
    '100%': {
      transform: 'translateY(0%) scale(' + amplification * 1 + ') scaleY(' + amplification * 1 + ')'
    }
  };
}
function makeEntrance(_ref9) {
  var amplification = _ref9.amplification;
  return {
    '0%': {
      transform: 'scale(' + amplification * 0.3 + ') rotate(' + amplification * 6 + 'deg) translateX(-' + amplification * 30 + '%) translateY(' + amplification * 30 + '%)',
      opacity: 0.1
    },
    '30%': {
      transform: 'scale(' + amplification * 1.03 + ') rotate(-' + amplification * 2 + 'deg) translateX(' + amplification * 2 + '%) translateY(-' + amplification * 2 + '%)',
      opacity: 1
    },
    '45%': {
      transform: 'scale(' + amplification * 0.98 + ')',
      opacity: 1
    },
    '60%': {
      transform: 'scale(' + amplification * 1.01 + ')',
      opacity: 1
    },
    '75%': {
      transform: 'scale(' + amplification * 0.99 + ')',
      opacity: 1
    },
    '90%': {
      transform: 'scale(' + amplification * 1.01 + ')',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  };
}
function makeHatch(_ref10) {
  var amplification = _ref10.amplification;
  return {
    '0%': {
      transform: 'scaleY(0.6)'
    },
    '20%': {
      transform: 'rotate(-' + amplification * 2 + 'deg) scaleY(' + amplification * 1.05 + ')'
    },
    '35%': {
      transform: 'rotate(' + amplification * 2 + 'deg) scaleY(' + amplification + ')'
    },
    '50%': {
      transform: 'rotate(-' + amplification + 'deg)'
    },
    '65%': {
      transform: 'rotate(' + amplification + 'deg)'
    },
    '80%': {
      transform: 'rotate(-' + amplification + 'deg)'
    },
    '100%': {
      transform: 'none'
    }
  };
}

var Flash = composeAnimation(makeFlash);
var RollOut = composeDistance(composeAmplification(composeAnimation(makeRollOut), '$motion-roll-out-amplification'), '$motion-roll-out-distance');
var RollIn = composeDistance(composeAmplification(composeAnimation(makeRollIn), '$motion-roll-in-amplification'), '$motion-roll-in-distance');
var Rubber = composeAmplification(composeAnimation(makeRubber), '$motion-rubber-amplification');
var Swing = composeAmplification(composeAnimation(makeSwing), '$motion-swing-amplification');
var Zoom = composeAmplification(composeAnimation(makeZoom), '$motion-zoom-amplification');
var Hinge = composeAmplification(composeAnimation(makeHinge), '$motion-hinge-amplification');
var Pulse = composeAmplification(composeAnimation(makePulse), '$motion-pulse-amplification');
var ExpandUp = composeAmplification(composeAnimation(makeExpandUp), '$motion-expand-up-amplification');
var Entrance = composeAmplification(composeAnimation(makeEntrance), '$motion-entrance-amplification');
var Hatch = composeAmplification(composeAnimation(makeHatch), '$motion-hatch-amplification');

var makeTheme = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['$motion-duration'] = u['$motion-duration'] || {
    xs: '200ms',
    sm: '300ms',
    md: '500ms',
    lg: '750ms',
    xl: '1000ms'
  };
  v['$motion-timing-function'] = u['$motion-timing-function'] || {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  };
  v['$motion-delay'] = u['$motion-delay'] || {
    xs: '0ms',
    sm: '100ms',
    md: '200ms',
    lg: '500ms',
    xl: '1000ms'
  };
  v['$motion-direction'] = u['$motion-direction'] || {
    normal: 'normal',
    reverse: 'reverse',
    alternate: 'alternate',
    alternateReverse: 'alternate-reverse'
  };
  v['$motion-iterations'] = u['$motion-iterations'] || {
    xs: '1',
    sm: '3',
    md: '6',
    lg: '10',
    xl: 'infinite'
  };
  v['$motion-fill-mode'] = u['$motion-fill-mode'] || {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both'
  };
  v['$motion-play-state'] = u['$motion-play-state'] || {
    running: 'running',
    paused: 'paused'
  };
  v['$motion-filter'] = u['$motion-filter'] || {
    blur: '30px',
    brightness: '100%',
    contrast: '100%',
    grayscale: '100%)',
    hueRotate: '360deg',
    invert: '100%',
    opacity: '100%',
    saturate: '100%',
    sepia: '100%'
  };
  v['$motion-distance'] = u['$motion-distance'] || {
    xs: '0%',
    sm: '25%',
    md: '50%',
    lg: '75%',
    xl: '100%'
  };
  v['$motion-amplification'] = u['$motion-amplification'] || {
    xxs: 0.1,
    xs: 0.4,
    sm: 0.8,
    md: 1,
    lg: 1.4,
    xl: 1.8,
    xxl: 2
  };
  v['$motion-degree'] = u['$motion-degree'] || {
    xs: '45deg',
    sm: '90deg',
    md: '180deg',
    lg: '270deg',
    xl: '360deg'
  };
  v['$motion-perspective'] = u['$motion-perspective'] || {
    xs: '64px',
    sm: '128px',
    md: '256px',
    lg: '512px',
    xl: '1024px'
  };
  v['$motion-backface-visibility'] = u['$motion-backface-visibility'] || {
    hidden: 'hidden',
    visible: 'visible'
  };
  v['$motion-flip-perspective'] = u['$motion-flip-perspective'] || v['$motion-perspective']['lg'];
  v['$motion-hatch-amplification'] = u['$motion-hatch-amplification'] || v['$motion-amplification']['md'];
  v['$motion-entrance-amplification'] = u['$motion-entrance-amplification'] || v['$motion-amplification']['md'];
  v['$motion-expand-up-amplification'] = u['$motion-expand-up-amplification'] || v['$motion-amplification']['md'];
  v['$motion-pulse-amplification'] = u['$motion-pulse-amplification'] || v['$motion-amplification']['md'];
  v['$motion-hinge-amplification'] = u['$motion-hinge-amplification'] || v['$motion-amplification']['md'];
  v['$motion-zoom-amplification'] = u['$motion-zoom-amplification'] || v['$motion-amplification']['md'];
  v['$motion-rubber-amplification'] = u['$motion-rubber-amplification'] || v['$motion-amplification']['md'];
  v['$motion-swing-amplification'] = u['$motion-swing-amplification'] || v['$motion-amplification']['md'];
  v['$motion-roll-in-amplification'] = u['$motion-roll-in-amplification'] || v['$motion-amplification']['md'];
  v['$motion-roll-out-amplification'] = u['$motion-roll-out-amplification'] || v['$motion-amplification']['md'];
  v['$motion-roll-out-distance'] = u['$motion-roll-out-distance'] || '100%';
  v['$motion-roll-in-distance'] = u['$motion-roll-in-distance'] || '100%';
  v['$motion-slide-left-distance'] = u['$motion-slide-left-distance'] || '100%';
  v['$motion-slide-right-distance'] = u['$motion-slide-right-distance'] || '100%';
  v['$motion-slide-up-distance'] = u['$motion-slide-up-distance'] || '100%';
  v['$motion-slide-down-distance'] = u['$motion-slide-down-distance'] || '100%';
  v['$motion-slide-right-left-distance'] = u['$motion-slide-right-left-distance'] || '100%';
  v['$motion-rotate-in-rotation'] = u['$motion-rotate-in-rotation'] || v['$motion-degree']['lg'];
  v['$motion-rotate-left-rotation'] = u['$motion-rotate-left-rotation'] || v['$motion-degree']['xs'];
  v['$motion-rotate-right-rotation'] = u['$motion-rotate-right-rotation'] || v['$motion-degree']['xs'];
  v['$motion-rotate-up-left-rotation'] = u['$motion-rotate-up-left-rotation'] || v['$motion-degree']['xs'];
  v['$motion-rotate-up-right-rotation'] = u['$motion-rotate-up-right-rotation'] || v['$motion-degree']['xs'];
  v['$motion-light-in-distance'] = u['$motion-light-in-distance'] || '100%';
  v['$motion-light-in-rotation'] = u['$motion-light-in-rotation'] || v['$motion-degree']['xs'];
  v['$motion-light-out-distance'] = u['$motion-light-out-distance'] || '100%';
  v['$motion-light-out-rotation'] = u['$motion-light-out-rotation'] || v['$motion-degree']['xs'];
  v['$motion-blur-distance'] = u['$motion-blur-distance'] || '5px';
  v['$motion-opacity-amplification'] = u['$motion-opacity-amplification'] || v['$motion-amplification']['md'];
  v['$motion-contrast-amplification'] = u['$motion-contrast-amplification'] || v['$motion-amplification']['md'];
  v['$motion-brightness-amplification'] = u['$motion-brightness-amplification'] || v['$motion-amplification']['md'];
  v['$motion-grayscale-amplification'] = u['$motion-grayscale-amplification'] || v['$motion-amplification']['md'];
  v['$motion-hue-rotate-rotation'] = u['$motion-hue-rotate-rotation'] || v['$motion-degree']['xl'];
  v['$motion-invert-amplification'] = u['$motion-invert-amplification'] || v['$motion-amplification']['md'];
  v['$motion-saturate-amplification'] = u['$motion-saturate-amplification'] || v['$motion-amplification']['md'];
  v['$motion-sepia-amplification'] = u['$motion-sepia-amplification'] || v['$motion-amplification']['md'];
  v['$motion-drop-shadow-amplification'] = u['$motion-drop-shadow-amplification'] || v['$motion-amplification']['md'];
  v['$motion-fade-in-down-distance'] = u['$motion-fade-in-down-distance'] || '100%';
  v['$motion-fade-in-up-distance'] = u['$motion-fade-in-up-distance'] || '100%';
  v['$motion-fade-in-left-distance'] = u['$motion-fade-in-left-distance'] || '100%';
  v['$motion-fade-in-right-distance'] = u['$motion-fade-in-right-distance'] || '100%';
  v['$motion-bounce-amplification'] = u['$motion-bounce-amplification'] || '100%';
  v['$motion-bounce-down-distance'] = u['$motion-bounce-down-distance'] || '100%';
  v['$motion-bounce-up-distance'] = u['$motion-bounce-up-distance'] || '100%';
  v['$motion-bounce-left-distance'] = u['$motion-bounce-left-distance'] || '100%';
  v['$motion-bounce-right-distance'] = u['$motion-bounce-right-distance'] || '100%';
  return v;
};
var theme = makeTheme();

export { Blur, Contrast, Brightness, Grayscale, HueRotate, Invert, Opacity, Sepia, Saturate, Dropshadow, Bounce, BounceDown, BounceUp, BounceLeft, BounceRight, FadeIn, FadeInDown, FadeInUp, FadeInLeft, FadeInRight, Flip, FlipX, FlipY, LightIn, LightOut, RotateIn, RotateLeft, RotateRight, RotateUpLeft, RotateUpRight, SlideUp, SlideDown, SlideRight, SlideLeft, SlideRightLeft, Flash, RollOut, RollIn, Rubber, Swing, Zoom, Hinge, Pulse, ExpandUp, Entrance, Hatch, makeTheme, theme };
//# sourceMappingURL=bootstrap-styled-motion.es.js.map
