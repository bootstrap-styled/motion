import { makeBounceDown } from './styledBounce';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBounceDown), '$motion-bounce-down-distance');
