/**
 * @public
 * @name makeContrast
 * @descrption make contrast object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeContrast({ amplification }) {
  return {
    '0%': {
      filter: 'contrast(0%)',
    },
    '100%': {
      filter: `contrast(${amplification * 100}%)`,
    },
  };
}
