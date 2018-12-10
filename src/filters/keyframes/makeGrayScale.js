/**
 * @public
 * @name makeGrayScale
 * @descrption make grayscale object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeGrayScale({ amplification }) {
  return {
    '0%': {
      filter: 'grayscale(0%)',
    },
    '100%': {
      filter: `grayscale(${amplification * 100}%)`,
    },
  };
}
