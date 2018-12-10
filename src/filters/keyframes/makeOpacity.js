/**
 * @public
 * @name makeOpacity
 * @descrption make opacity object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeOpacity({ amplification }) {
  return {
    '0%': {
      filter: 'opacity(0%)',
    },
    '100%': {
      filter: `opacity(${amplification * 100}%)`,
    },
  };
}
