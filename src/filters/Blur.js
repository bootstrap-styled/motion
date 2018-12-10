import makeBlur from './keyframes/makeBlur';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBlur), '$motion-blur-distance');
