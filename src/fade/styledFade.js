/**
 * @public
 * @name makeFadeIn
 * @description make fade in object
 * @returns {{0%: {opacity: number}, 100%: {opacity: number}}}
 */
export function makeFadeIn() {
  return {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  };
}

/**
 * @public
 * @name makeFadeLeft
 * @description make fade left object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export function makeFadeLeft({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}

/**
 * @public
 * @name makeFadeRight
 * @description make fade right object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export function makeFadeRight({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}


/**
 * @public
 * @name makeFadeDown
 * @description make fade down object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export function makeFadeDown({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(0, -${distance}, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}

/**
 * @public
 * @name makeFadeUp
 * @description make fade up object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export function makeFadeUp({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(0, ${distance}, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}
