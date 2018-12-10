/**
 * @public
 * @name makeSaturate
 * @descrption make saturate object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeSaturate({ amplification }) {
  return {
    '0%': {
      filter: 'saturate(0%)',
    },
    '100%': {
      filter: `saturate(${amplification * 8}%)`,
    },
  };
}
