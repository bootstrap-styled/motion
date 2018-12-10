/**
 * @public
 * @name makeFadeIn
 * @description make fade in object
 * @returns {{0%: {opacity: number}, 100%: {opacity: number}}}
 */
export default function makeFadeIn() {
  return {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  };
}
