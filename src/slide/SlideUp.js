import makeSlideUp from './keyframes/makeSlideUp';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideUp), '$motion-slide-up-distance');
