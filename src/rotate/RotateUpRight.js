import makeRotateUpLeft from './keyframes/makeRotateUpLeft';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeRotateUpLeft), '$motion-rotate-up-right-rotation');
