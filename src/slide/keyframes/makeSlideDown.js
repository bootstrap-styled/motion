/**
 * @public
 * @name makeSlideDown
 * @description make slide down object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export default function makeSlideDown({ distance }) {
  return {
    from: {
      transform: `translate3d(0, -${distance}, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}
