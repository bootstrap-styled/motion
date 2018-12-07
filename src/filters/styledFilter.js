/**
 * @public
 * @name makeBlur
 * @descrption make blur object
 * @param distance
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeBlur({ distance }) {
  return {
    '0%': {
      filter: 'blur(0px)',
    },
    '100%': {
      filter: `blur(${distance})`,
    },
  };
}

/**
 * @public
 * @name makeOpacity
 * @descrption make opacity object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeOpacity({ amplification }) {
  return {
    '0%': {
      filter: 'opacity(0%)',
    },
    '100%': {
      filter: `opacity(${amplification * 100}%)`,
    },
  };
}

/**
 * @public
 * @name makeContrast
 * @descrption make contrast object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeContrast({ amplification }) {
  return {
    '0%': {
      filter: 'contrast(0%)',
    },
    '100%': {
      filter: `contrast(${amplification * 100}%)`,
    },
  };
}

/**
 * @public
 * @name makeBrightness
 * @descrption make brightness object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeBrightness({ amplification }) {
  return {
    '0%': {
      filter: 'brightness(0%)',
    },
    '100%': {
      filter: `brightness(${amplification * 100}%)`,
    },
  };
}


/**
 * @public
 * @name makeGrayscale
 * @descrption make grayscale object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeGrayscale({ amplification }) {
  return {
    '0%': {
      filter: 'grayscale(0%)',
    },
    '100%': {
      filter: `grayscale(${amplification * 100}%)`,
    },
  };
}

/**
 * @public
 * @name makeHueRotate
 * @descrption make hue rotate object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeHueRotate({ rotation }) {
  return {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: `hue-rotate(${rotation})`,
    },
  };
}

/**
 * @public
 * @name makeInvert
 * @descrption make invert object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeInvert({ amplification }) {
  return {
    '0%': {
      filter: 'invert(0%)',
    },
    '100%': {
      filter: `invert(${amplification * 100}%)`,
    },
  };
}

/**
 * @public
 * @name makeSaturate
 * @descrption make saturate object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeSaturate({ amplification }) {
  return {
    '0%': {
      filter: 'saturate(0%)',
    },
    '100%': {
      filter: `saturate(${amplification * 8}%)`,
    },
  };
}

/**
 * @public
 * @name makeSepia
 * @descrption make sepia object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeSepia({ amplification }) {
  return {
    '0%': {
      filter: 'sepia(0%)',
    },
    '100%': {
      filter: `sepia(${amplification * 100}%)`,
    },
  };
}

/**
 * @public
 * @name makeDropShadow
 * @descrption make drop shadow object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export function makeDropShadow({ amplification }) {
  return {
    '0%': {
      filter: 'drop-shadow(0px 0px 0px #000)',
    },
    '100%': {
      filter: `drop-shadow(${amplification * 5}px ${amplification * 5}px ${amplification * 5}px #000)`,
    },
  };
}
