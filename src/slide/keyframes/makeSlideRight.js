/**
 * @public
 * @name makeSlideRight
 * @description make slide right object
 * @param distance
 * @returns {{from: {transform: string}, to: {transform: string}}}
 */
export default function makeSlideRight({ distance }) {
  return {
    from: {
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  };
}
