import makeSlideRightLeft from './keyframes/makeSlideRightLeft';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideRightLeft), '$motion-slide-right-left-distance');
