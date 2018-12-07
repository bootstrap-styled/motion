/**
 * @public
 * @name makeLightIn
 * @description make light in object
 * @param distance
 * @param rotation
 * @returns {{from: {transform: string, opacity: number}, 40%: {transform: string, opacity: number}, 80%: {transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeLightIn({ distance, rotation }) {
  return {
    from: {
      transform: `translate3d(${distance}, 0, 0) skew(-${rotation})`,
      opacity: 0,
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1,
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  };
}

/**
 * @public
 * @name makeLightOut
 * @description make light out object
 * @param distance
 * @param rotation
 * @returns {{from: {transform: string, opacity: number}, 40%: {transform: string, opacity: number}, 80%: {transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeLightOut({ distance, rotation }) {
  return {
    from: {
      opacity: 1,
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1,
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1,
    },
    to: {
      transform: `translate3d(-${distance}, 0, 0) skew(${rotation})`,
      opacity: 0,
    },
  };
}
