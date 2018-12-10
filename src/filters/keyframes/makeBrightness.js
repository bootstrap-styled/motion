/**
 * @public
 * @name makeBrightness
 * @descrption make brightness object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeBrightness({ amplification }) {
  return {
    '0%': {
      filter: 'brightness(0%)',
    },
    '100%': {
      filter: `brightness(${amplification * 100}%)`,
    },
  };
}
