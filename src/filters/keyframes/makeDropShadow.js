/**
 * @public
 * @name makeDropShadow
 * @descrption make drop shadow object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeDropShadow({ amplification }) {
  return {
    '0%': {
      filter: 'drop-shadow(0px 0px 0px #000)',
    },
    '100%': {
      filter: `drop-shadow(${amplification * 5}px ${amplification * 5}px ${amplification * 5}px #000)`,
    },
  };
}
