import makeHueRotate from './keyframes/makeHueRotate';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeHueRotate), '$motion-hue-rotate-rotation');
