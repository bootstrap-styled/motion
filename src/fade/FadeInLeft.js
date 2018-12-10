import makeFadeInLeft from './keyframes/makeFadeInLeft';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeInLeft), '$motion-fade-in-left-distance');
