/**
 * @name makeZoom
 * @description make zoom object
 * @param amplification
 * @returns {{from: {opacity: number, transform: string}, to: {opacity: number}}}
 */
export default function makeZoom({ amplification }) {
  return {
    from: {
      opacity: 0,
      transform: `scale3d(${amplification * 0.4}, ${amplification * 0.4}, ${amplification * 0.4})`,
    },
    to: {
      opacity: 1,
    },
  };
}
