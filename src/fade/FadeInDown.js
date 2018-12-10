import makeFadeInDown from './keyframes/makeFadeInDown';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeFadeInDown), '$motion-fade-in-down-distance');
