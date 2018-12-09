import { makeFadeDown } from './styledFade';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeDown), '$motion-fade-in-down-distance');
