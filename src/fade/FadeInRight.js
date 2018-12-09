import { makeFadeRight } from './styledFade';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeRight), '$motion-fade-in-right-distance');
