import makeSlideRight from './keyframes/makeSlideRight';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideRight), '$motion-slide-right-distance');
