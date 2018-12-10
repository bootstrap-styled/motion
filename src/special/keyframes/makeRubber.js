/**
 * @public
 * @name makeRubber
 * @description Rubber object
 * @param amplification
 * @returns {{from: {transform: string}, 30%: {transform: string}, 40%: {transform: string}, 50%: {transform: string}, 65%: {transform: string}, 75%: {transform: string}, to: {transform: string}}}
 */
export default function makeRubber({ amplification }) {
  return {
    from: {
      transform: 'scale3d(1, 1, 1)',
    },
    '30%': {
      transform: `scale3d(${amplification * 1.25}, ${amplification * 0.75}, ${amplification * 1})`,
    },
    '40%': {
      transform: `scale3d(${amplification * 0.75}, ${amplification * 1.25}, ${amplification * 1})`,
    },
    '50%': {
      transform: `scale3d(${amplification * 1.15}, ${amplification * 0.85}, ${amplification * 1})`,
    },
    '65%': {
      transform: `scale3d(${amplification * 0.95}, ${amplification * 1.05}, ${amplification * 1})`,
    },
    '75%': {
      transform: `scale3d(${amplification * 1.05}, ${amplification * 0.95}, ${amplification * 1})`,
    },
    to: {
      transform: 'scale3d(1, 1, 1)',
    },
  };
}
