'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable dot-notation */
var makeTheme = exports.makeTheme = function makeTheme() {
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

  // Use default timing function properties
  v['$motion-timing-function'] = u['$motion-timing-function'] || {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  };

  // Use xs for disable delay. Delay can't exceed 1000ms (in order to don't be forget by the user).
  v['$motion-delay'] = u['$motion-delay'] || {
    xs: '0ms',
    sm: '100ms',
    md: '200ms',
    lg: '500ms',
    xl: '1000ms'
  };

  // ANIMATION CONFIGURATION
  v['$motion-direction'] = u['$motion-direction'] || {
    normal: 'normal',
    reverse: 'reverse',
    alternate: 'alternate',
    alternateReverse: 'alternate-reverse'
  };

  // Use for iterate n time or loop your animation
  v['$motion-iterations'] = u['$motion-iterations'] || {
    xs: '1',
    sm: '3',
    md: '6',
    lg: '10',
    xl: 'infinite'
  };

  // Define if the animation should stop on the end and stay or come back to initial place
  v['$motion-fill-mode'] = u['$motion-fill-mode'] || {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both'
  };

  // Define the playing state of your components
  v['$motion-play-state'] = u['$motion-play-state'] || {
    running: 'running',
    paused: 'paused'
  };

  // Motion Customisation
  // Customisation Filter
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

  // Moving animation configuration
  // Only used for moving element (using translate3d css properties)
  v['$motion-distance'] = u['$motion-distance'] || {
    xs: '0%',
    sm: '25%',
    md: '50%',
    lg: '75%',
    xl: '100%'
  };

  // Scale animation configuration
  // Only used for decrease scaling of element (using scale3d css properties)
  v['$motion-amplification'] = u['$motion-amplification'] || {
    xxs: 0.1,
    xs: 0.4,
    sm: 0.8,
    md: 1,
    lg: 1.4,
    xl: 1.8,
    xxl: 2
  };

  // Rotate animation configuration
  // using rotate3d css properties
  v['$motion-degree'] = u['$motion-degree'] || {
    xs: '45deg',
    sm: '90deg',
    md: '180deg',
    lg: '270deg',
    xl: '360deg'
  };

  // Define perspective for rotating animation
  v['$motion-perspective'] = u['$motion-perspective'] || {
    xs: '64px',
    sm: '128px',
    md: '256px',
    lg: '512px',
    xl: '1024px'
  };

  // Define backface visibility for rotating animation
  v['$motion-backface-visibility'] = u['$motion-backface-visibility'] || {
    hidden: 'hidden',
    visible: 'visible'
  };

  // Flip
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

/* eslint-enable dot-notation */
var theme = exports.theme = makeTheme();

exports.default = theme;