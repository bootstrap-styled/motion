import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeRollOut
 * @description roll out object
 * @param distance
 * @param amplification
 * @returns {{from: {opacity: number}, to: {transform: string, opacity: number}}}
 */
function makeRollOut({ distance, amplification }) {
  return {
    from: {
      opacity: 1,
    },
    to: {
      transform: `translate3d(${distance}, 0, 0) rotate3d(0, 0, 1, ${amplification * 120}deg)`,
      opacity: 0,
    },
  };
}

makeRollOut.type = TYPE_ROTATE;
export default makeRollOut;
