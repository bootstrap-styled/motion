import { makeFadeLeft } from './styledFade';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeLeft), '$motion-fade-in-left-distance');
