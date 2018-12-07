import { keyframes } from 'styled-components';
import { toHashCode } from '@bootstrap-styled/utils/lib/tools';

/**
 * This will store a reference to all the keyframe created with makeKeyFrame
 * @type {*[]}
 */
const keyframeRefList = [];

/**
 * @public
 * @name toKeyframeString
 * @description This will convert an object into a valid keyframe string for styled
 * @param keyFrameObject {Object} - Object of keyFrames
 * @example
 * const kf = {
 *   from: {
 *     width: '0%',
 *   },
 *   '20%, 40%': {
 *     width: '75%',
 *   },
 *   '60%': {
 *     width: '25%',
 *   },
 *   to: {
 *     width: '100%',
 *   },
 * };
 * toKeyframeString(kf);
 * // return the key frame stringified
 * @returns {string} - The keyframe stringified
 */
export function toKeyframeString(keyFrameObject) {
  let keyframeStr = '';
  Object.keys(keyFrameObject).forEach((step) => {
    keyframeStr += `${step}{`;
    Object.keys(keyFrameObject[step]).forEach((cssAttr) => {
      keyframeStr += `${cssAttr}:${keyFrameObject[step][cssAttr]};`;
    });
    keyframeStr += '}';
  });
  return keyframeStr;
}


/**
 * @public
 * @name makeKeyframe
 * @description make styled keyframe
 * @param make {function} - make animation function
 * @param options {object} - options
 * @param userKeyframes {object} - user keyframes
 * @param maxKeyframe {number} [maxKeyframe=50] - max key frame injected in the page before warning
 * @returns {string} the name of the keyframe
 */
export default function makeKeyframe(make, options, userKeyframes = {}, maxKeyframe = 50) {
  const merge = make(options);
  Object.keys(userKeyframes).forEach((key) => {
    merge[key] = Object.assign({}, merge[key], userKeyframes[key]);
  });
  const hashCode = toHashCode(JSON.stringify(merge));
  const filtered = keyframeRefList.filter((keyframeRef) => keyframeRef.hashCode === hashCode);

  if (filtered.length) {
    return filtered[0].name;
  }

  const keyframeStr = toKeyframeString(merge);

  const name = keyframes`
    ${keyframeStr}
  `;

  keyframeRefList.push({
    name,
    hashCode,
  });

  /* istanbul ignore if */
  if (keyframeRefList.length > maxKeyframe) {
    console.warn(`You might have done a mistake because of current keyframes injection count. You currently have ${keyframeRefList.length} keyframes in your page.`); // eslint-disable-line no-console
  }
  return name;
}
