import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeFlipY
 * @description make flipY object
 * @param perspective
 * @returns {{from: {transform: string, animation-timing-function: string}, 40%: {transform: string, animation-timing-function: string}, 50%: {transform: string, animation-timing-function: string}, 80%: {transform: string, animation-timing-function: string}, to: {transform: string, animation-timing-function: string}}}
 */
function makeFlipY({ perspective }) {
  return {
    from: {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, 90deg)`,
      'animation-timing-function': 'ease-in',
      opacity: 0,
    },
    '40%': {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, -20deg)`,
      'animation-timing-function': 'ease-in',
    },
    '60%': {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, 10deg)`,
      opacity: 1,
    },
    '80%': {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, -5deg)`,
    },
    to: {
      transform: `perspective(${perspective})`,
    },
  };
}

makeFlipY.type = TYPE_ROTATE;

export default makeFlipY;
