import { makeRotateLeft } from './styledRotate';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeRotateLeft), '$motion-rotate-left-rotation');
