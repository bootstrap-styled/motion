import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeSwing
 * @description make swing object
 * @param amplification
 * @returns {{20%: {transform: string}, 40%: {transform: string}, 60%: {transform: string}, 80%: {transform: string}, to: {transform: string}}}
 */
function makeSwing({ amplification }) {
  return {
    '20%': {
      transform: `rotate3d(0, 0, 1, ${amplification * 15}deg)`,
    },
    '40%': {
      transform: `rotate3d(0, 0, 1, -${amplification * 10}deg)`,
    },
    '60%': {
      transform: `rotate3d(0, 0, 1, ${amplification * 5}deg)`,
    },
    '80%': {
      transform: `rotate3d(0, 0, 1, -${amplification * 5}deg)`,
    },
    to: {
      transform: 'rotate3d(0, 0, 1, 0deg)',
    },
  };
}

makeSwing.type = TYPE_ROTATE;

export default makeSwing;
