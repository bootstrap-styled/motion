/**
 * @public
 * @name makeSlideDown
 * @description make slide down object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export function makeSlideDown({ distance }) {
  return {
    from: {
      transform: `translate3d(0, -${distance}, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

/**
 * @public
 * @name makeSlideUp
 * @description make slide up object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export function makeSlideUp({ distance }) {
  return {
    from: {
      transform: `translate3d(0, ${distance}, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

/**
 * @public
 * @name makeSlideLeft
 * @description make slide left object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export function makeSlideLeft({ distance }) {
  return {
    from: {
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

/**
 * @public
 * @name makeSlideRight
 * @description make slide right object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export function makeSlideRight({ distance }) {
  return {
    from: {
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

/**
 * @public
 * @name makeSlideRightLeft
 * @description make slide right left object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export function makeSlideRightLeft({ distance }) {
  return {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    '50%': {
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}
