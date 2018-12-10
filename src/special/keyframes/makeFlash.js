/**
 * @public
 * @name makeFlash
 * @description flash object
 * @returns {{from: {opacity: number}, 25%: {opacity: number}, 50%: {opacity: number}, 75%: {opacity: number}, to: {opacity: number}}}
 */
export default function makeFlash() {
  return {
    from: {
      opacity: 1,
    },
    '25%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '75%': {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
}
