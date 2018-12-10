/**
 * @public
 * @name makeFadeInRight
 * @description make fade right object
 * @param distance
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number, transform: string}}}
 */
export default function makeFadeInRight({ distance }) {
  return {
    from: {
      opacity: 0,
      transform: `translate3d(${distance}, 0, 0)`,
    },
    to: {
      opacity: 1,
      transform: 'none',
    },
  };
}
