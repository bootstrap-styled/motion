import makeFadeInRight from './keyframes/makeFadeInRight';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeInRight), '$motion-fade-in-right-distance');
