import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeRotateLeft
 * @description make rotate left object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
function makeRotateLeft({ rotation }) {
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: `rotate3d(0, 0, 1, -${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}
makeRotateLeft.type = TYPE_ROTATE;

export default makeRotateLeft;
