/**
 * @public
 * @name makeHinge
 * @description make hinge object
 * @param amplification
 * @returns {{from: {transform-origin: string, animation-timing-function: string, opacity: number}, 20%, 40%: {transform-origin: string, transform: string, animation-timing-function: string, opacity: number}, 60%, 80%: {transform-origin: string, transform: string, animation-timing-function: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export default function makeHinge({ amplification }) {
  return {
    from: {
      'transform-origin': 'top-left',
      'animation-timing-function': 'ease-in-out',
      opacity: 1,
    },
    '20%, 40%': {
      'transform-origin': 'top-left',
      transform: `rotate(0, 0, 1, ${amplification * 80}deg)`,
      'animation-timing-function': 'ease-in-out',
      opacity: 1,
    },
    '60%, 80%': {
      'transform-origin': 'top-left',
      transform: `rotate(0, 0, 1, ${amplification * 20}deg)`,
      'animation-timing-function': 'ease-in-out',
      opacity: 1,
    },
    to: {
      transform: `translate3d(0, ${amplification * 700}px, 0)`,
      opacity: 0,
    },
  };
}
