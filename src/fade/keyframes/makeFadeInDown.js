/**
 * @public
 * @name makeFadeInDown
 * @description make fade down object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export default function makeFadeInDown({ distance }) {
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
