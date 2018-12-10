import { TYPE_ROTATE } from '../../typeEnums';
/**
 * @public
 * @name makeRollIn
 * @description roll in object
 * @param distance
 * @param amplification
 * @returns {{from: {transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
function makeRollIn({ distance, amplification }) {
  return {
    from: {
      transform: `translate3d(-${distance}, 0, 0) rotate3d(0, 0, 1, -${amplification * 120}deg)`,
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRollIn.type = TYPE_ROTATE;
export default makeRollIn;
