/**
 * @public
 * @name makeInvert
 * @descrption make invert object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeInvert({ amplification }) {
  return {
    '0%': {
      filter: 'invert(0%)',
    },
    '100%': {
      filter: `invert(${amplification * 100}%)`,
    },
  };
}
