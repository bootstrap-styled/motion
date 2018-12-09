import { makeSlideRightLeft } from './styledSlide';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideRightLeft), '$motion-slide-right-left-distance');
