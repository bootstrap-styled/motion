/**
 * @public
 * @name makeBounceUp
 * @description make bounce up object
 * @param distance
 * @returns {{from: {animation-timing-function: string}, 0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 90%: {transform: string}, to: {transform: string}}}
 */
export default function makeBounceUp({ distance }) {
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
