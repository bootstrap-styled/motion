import { makeSlideLeft } from './styledSlide';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeSlideLeft), '$motion-slide-left-distance');
