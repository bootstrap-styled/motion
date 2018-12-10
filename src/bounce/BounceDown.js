import makeBounceDown from './keyframes/makeBounceDown';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBounceDown), '$motion-bounce-down-distance');
