/**
 * @public
 * @name makeSlideLeft
 * @description make slide left object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export default function makeSlideLeft({ distance }) {
  return {
    from: {
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}
