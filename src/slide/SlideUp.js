import { makeSlideUp } from './styledSlide';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideUp), '$motion-slide-up-distance');
