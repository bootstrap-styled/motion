import { TYPE_ROTATE } from '../typeEnums';

/**
 * @public
 * @name makeRotateIn
 * @description make rotate in object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeRotateIn({ rotation }) {
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

/**
 * @public
 * @name makeRotateLeft
 * @description make rotate left object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeRotateLeft({ rotation }) {
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

/**
 * @public
 * @name makeRotateUpLeft
 * @description make rotate up left object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeRotateUpLeft({ rotation }) {
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

/**
 * @public
 * @name makeRotateUpRight
 * @description make rotate up right object
 * @param rotation
 * @returns {{from: {transform-origin: string, transform: string, opacity: number}, to: {transform: string, opacity: number}}}
 */
export function makeRotateUpRight({ rotation }) {
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: `rotate3d(0, 0, 1, -${rotation})`,
      opacity: 0,
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1,
    },
  };
}

makeRotateUpRight.type = TYPE_ROTATE;
