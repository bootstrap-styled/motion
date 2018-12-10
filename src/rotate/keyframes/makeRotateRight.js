import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeRotateRight
 * @description make rotate right object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeRotateRight({ rotation }) {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: `rotate3d(0, 0, 1, ${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateRight.type = TYPE_ROTATE;

export default makeRotateRight;
