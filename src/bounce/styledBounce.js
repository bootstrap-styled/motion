/**
 * @public
 * @name makeBounce
 * @description make bounce object
 * @returns {{from: {animation-timing-function: string}, 0%: {opacity: number, transform: string}, 20%: {transform: string}, 40%: {transform: string}, 60%: {opacity: number, transform: string}, 80%: {transform: string}, to: {opacity: number, transform: string}}}
 */
export function makeBounce() {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)',
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)',
    },
    to: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)',
    },
  };
}

/**
 * @public
 * @name makeBounceDown
 * @description make bounce down object
 * @param distance
 * @returns {{from: {animation-timing-function: string}, 0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 90%: {transform: string}, to: {transform: string}}}
 */
export function makeBounceDown({ distance }) {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)',
    },
    '0%': {
      transform: `translate3d(0, -${distance}, 0)`,
    },
    '60%': {
      transform: 'translate3d(0, 25px, 0)',
    },
    '75%': {
      transform: 'translate3d(0, -15px, 0)',
    },
    '90%': {
      transform: 'translate3d(0, 5px, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

/**
 * @public
 * @name makeBounceUp
 * @description make bounce up object
 * @param distance
 * @returns {{from: {animation-timing-function: string}, 0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 90%: {transform: string}, to: {transform: string}}}
 */
export function makeBounceUp({ distance }) {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)',
    },
    '0%': {
      transform: `translate3d(0, ${distance}, 0)`,
    },
    '60%': {
      transform: 'translate3d(0, -25px, 0)',
    },
    '75%': {
      transform: 'translate3d(0, 10px, 0)',
    },
    '90%': {
      transform: 'translate3d(0, -5px, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}

/**
 * @public
 * @name makeBounceLeft
 * @description make bounce left object
 * @param distance
 * @returns {{from: {animation-timing-function: string}, 0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 90%: {transform: string}, to: {transform: string}}}
 */
export function makeBounceLeft({ distance }) {
  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)',
    },
    '0%': {
      opacity: 0,
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(25px, 0, 0)',
    },
    '75%': {
      transform: 'translate3d(-10px, 0, 0)',
    },
    '90%': {
      transform: 'translate3d(5px, 0, 0)',
    },
    to: {
      transform: 'none',
    },
  };
}

/**
 * @public
 * @name makeBounceRight
 * @description make bounce right object
 * @param distance
 * @returns {{from: {animation-timing-function: string}, 0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 90%: {transform: string}, to: {transform: string}}}
 */
export function makeBounceRight({ distance }) {
  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)',
    },
    '0%': {
      opacity: 0,
      transform: `translate3d(${distance}, 0, 0)`,
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(-25px, 0, 0)',
    },
    '75%': {
      transform: 'translate3d(10px, 0, 0)',
    },
    '90%': {
      transform: 'translate3d(-5px, 0, 0)',
    },
    to: {
      transform: 'none',
    },
  };
}
