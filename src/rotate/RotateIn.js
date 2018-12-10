import makeRotateIn from './keyframes/makeRotateIn';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeRotateIn), '$motion-rotate-in-rotation');
