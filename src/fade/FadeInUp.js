import { makeFadeUp } from './styledFade';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeUp), '$motion-fade-in-up-distance');
