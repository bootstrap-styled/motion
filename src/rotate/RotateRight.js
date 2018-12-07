import { makeRotateRight } from './styledRotate';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeRotateRight), '$motion-rotate-right-rotation');
