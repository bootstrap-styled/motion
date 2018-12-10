/**
 * @public
 * @name makeBounce
 * @description make bounce object
 * @returns {{from: {animation-timing-function: string}, 0%: {opacity: number, transform: string}, 20%: {transform: string}, 40%: {transform: string}, 60%: {opacity: number, transform: string}, 80%: {transform: string}, to: {opacity: number, transform: string}}}
 */
export default function makeBounce() {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)',
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)',
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)',
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)',
    },
    to: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)',
    },
  };
}
