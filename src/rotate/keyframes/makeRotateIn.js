import { TYPE_ROTATE } from '../../typeEnums';

/**
 * @public
 * @name makeRotateIn
 * @description make rotate in object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
function makeRotateIn({ rotation }) {
  return {
    from: {
      'transform-origin': 'center',
      transform: `rotate3d(0, 0, 1, -${rotation})`,
      opacity: 0,
    },
    to: {
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateIn.type = TYPE_ROTATE;

export default makeRotateIn;
