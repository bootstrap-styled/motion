/**
 * @public
 * @name makeHueRotate
 * @descrption make hue rotate object
 * @param amplification
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeHueRotate({ rotation }) {
  return {
    '0%': {
      filter: 'hue-rotate(0deg)',
    },
    '100%': {
      filter: `hue-rotate(${rotation})`,
    },
  };
}
