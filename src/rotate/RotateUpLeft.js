import { makeRotateUpRight } from './styledRotate';
import composeAnimation from '../templates/composeAnimation';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeAnimation(makeRotateUpRight), '$motion-rotate-up-left-rotation');
