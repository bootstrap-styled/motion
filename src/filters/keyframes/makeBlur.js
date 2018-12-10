/**
 * @public
 * @name makeBlur
 * @descrption make blur object
 * @param distance
 * @returns {{0%: {filter: string}, 100%: {filter: string}}}
 */
export default function makeBlur({ distance }) {
  return {
    '0%': {
      filter: 'blur(0px)',
    },
    '100%': {
      filter: `blur(${distance})`,
    },
  };
}
