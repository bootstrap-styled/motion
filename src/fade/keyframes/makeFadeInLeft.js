/**
 * @public
 * @name makeFadeInLeft
 * @description make fade left object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export default function makeFadeInLeft({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(-${distance}, 0, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}
