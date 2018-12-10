/**
 * @public
 * @name makeFadeInUp
 * @description make fade up object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export default function makeFadeInUp({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(0, ${distance}, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}
