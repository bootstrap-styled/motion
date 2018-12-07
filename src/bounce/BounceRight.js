import { makeBounceRight } from './styledBounce';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAnimation(makeBounceRight), '$motion-bounce-right-distance');

