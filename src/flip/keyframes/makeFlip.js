import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeFlip
 * @description make flip object
 * @param perspective
 * @returns {{from: {transform: string, animation-timing-function: string}, 40%: {transform: string, animation-timing-function: string}, 50%: {transform: string, animation-timing-function: string}, 80%: {transform: string, animation-timing-function: string}, to: {transform: string, animation-timing-function: string}}}
 */
export default function makeFlip({ perspective }) {
  return {
    from: {
      transform: `perspective(${perspective}) rotate3d(0, 1, 0, -360deg)`,
      'animation-timing-function': 'ease-out',
    },
    '40%': {
      transform: `perspective(${perspective}) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)`,
      'animation-timing-function': 'ease-out',
    },
    '50%': {
      transform: `perspective(${perspective}) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px)`,
      'animation-timing-function': 'ease-in',
    },
    '80%': {
      transform: `perspective(${perspective}) scale3d(.90, .90, .90)`,
      'animation-timing-function': 'ease-in',
    },
    to: {
      transform: `perspective(${perspective})`,
      'animation-timing-function': 'ease-in',
    },
  };
}

makeFlip.type = TYPE_ROTATE;
