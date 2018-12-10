import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeRotateUpLeft
 * @description make rotate up left object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
function makeRotateUpLeft({ rotation }) {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: `rotate3d(0, 0, 1, ${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateUpLeft.type = TYPE_ROTATE;

export default makeRotateUpLeft;
