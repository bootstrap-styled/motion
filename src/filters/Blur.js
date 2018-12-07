import { makeBlur } from './styledFilter';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBlur), '$motion-blur-distance');
