/**
 * @public
 * @name makeSepia
 * @descrption make sepia object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeSepia({ amplification }) {
  return {
    '0%': {
      filter: 'sepia(0%)',
    },
    '100%': {
      filter: `sepia(${amplification * 100}%)`,
    },
  };
}
