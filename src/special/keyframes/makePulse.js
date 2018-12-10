/**
 * @public
 * @name makePulse
 * @description make pulse object
 * @param amplification
 * @returns {{from: {transform: string}, 50%: {transform: string}, to: {transform: string}}}
 */
export default function makePulse({ amplification }) {
  return {
    from: {
      transform: 'scale3d(1, 1, 1)',
    },
    '50%': {
      transform: `scale3d(${amplification * 1.4}, ${amplification * 1.4}, ${amplification * 1.4})`,
    },
    to: {
      transform: 'scale3d(1, 1, 1)',
    },
  };
}
