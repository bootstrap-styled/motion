/**
 * @public
 * @name makeExpandUp
 * @description make expand up object
 * @param amplification
 * @returns {{0%: {transform: string}, 60%: {transform: string}, 75%: {transform: string}, 100%: {transform: string}}}
 */
export default function makeExpandUp({ amplification }) {
  return {
    '0%': {
      transform: `translateY(100%) scale(${amplification * 0.6}) scaleY(${amplification * 0.5})`,
    },
    '60%': {
      transform: `translateY(-${amplification * 7}%) scaleY(${amplification * 1.12})`,
    },
    '75%': {
      transform: `translateY(${amplification * 3}%)`,
    },
    '100%': {
      transform: `translateY(0%) scale(${amplification * 1}) scaleY(${amplification * 1})`,
    },
  };
}
