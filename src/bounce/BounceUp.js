import { makeBounceUp } from './styledBounce';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBounceUp), '$motion-bounce-up-distance');
