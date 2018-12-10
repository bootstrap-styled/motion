/**
 * @public
 * @name makeHatch
 * @description make hatch object
 * @param amplification
 * @returns {{0%: {transform: string}, 20%: {transform: string}, 35%: {transform: string}, 50%: {transform: string}, 65%: {transform: string}, 80%: {transform: string}, 100%: {transform: string}}}
 */
export default function makeHatch({ amplification }) {
  return {
    '0%': {
      transform: 'scaleY(0.6)',
    },
    '20%': {
      transform: `rotate(-${amplification * 2}deg) scaleY(${amplification * 1.05})`,
    },
    '35%': {
      transform: `rotate(${amplification * 2}deg) scaleY(${amplification})`,
    },
    '50%': {
      transform: `rotate(-${amplification}deg)`,
    },
    '65%': {
      transform: `rotate(${amplification}deg)`,
    },
    '80%': {
      transform: `rotate(-${amplification}deg)`,
    },
    '100%': {
      transform: 'none',
    },
  };
}
