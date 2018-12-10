import makeBounceLeft from './keyframes/makeBounceLeft';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBounceLeft), '$motion-bounce-left-distance');

