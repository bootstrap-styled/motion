import makeFadeInUp from './keyframes/makeFadeInUp';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeInUp), '$motion-fade-in-up-distance');
