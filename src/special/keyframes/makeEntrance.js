/**
 * @public
 * @name makeEntrance
 * @description make entrance object
 * @param amplification
 * @returns {{0%: {transform: string, opacity: number}, 30%: {transform: string, opacity: number}, 45%: {transform: string, opacity: number}, 60%: {transform: string, opacity: number}, 75%: {transform: string, opacity: number}, 90%: {transform: string, opacity: number}, 100%: {transform: string, opacity: number}}}
 */
export default function makeEntrance({ amplification }) {
  return {
    '0%': {
      transform: `scale(${amplification * 0.3}) rotate(${amplification * 6}deg) translateX(-${amplification * 30}%) translateY(${amplification * 30}%)`,
      opacity: 0.1,
    },
    '30%': {
      transform: `scale(${amplification * 1.03}) rotate(-${amplification * 2}deg) translateX(${amplification * 2}%) translateY(-${amplification * 2}%)`,
      opacity: 1,
    },
    '45%': {
      transform: `scale(${amplification * 0.98})`,
      opacity: 1,
    },
    '60%': {
      transform: `scale(${amplification * 1.01})`,
      opacity: 1,
    },
    '75%': {
      transform: `scale(${amplification * 0.99})`,
      opacity: 1,
    },
    '90%': {
      transform: `scale(${amplification * 1.01})`,
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  };
}
