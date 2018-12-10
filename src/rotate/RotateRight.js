import makeRotateRight from './keyframes/makeRotateRight';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeRotateRight), '$motion-rotate-right-rotation');
