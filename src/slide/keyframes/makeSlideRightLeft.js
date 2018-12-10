/**
 * @public
 * @name makeSlideRightLeft
 * @description make slide right left object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export default function makeSlideRightLeft({ distance }) {
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
