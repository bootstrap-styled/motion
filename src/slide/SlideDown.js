import makeSlideDown from './keyframes/makeSlideDown';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideDown), '$motion-slide-down-distance');
