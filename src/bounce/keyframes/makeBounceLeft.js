/**
 * @public
 * @name makeBounceLeft
 * @description make bounce left object
 * @param distance
 * @returns {{from: {animation-timing-function: string}, 0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 90%: {transform: string}, to: {transform: string}}}
 */
export default function makeBounceLeft({ distance }) {
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
