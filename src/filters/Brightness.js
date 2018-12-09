import { makeBrightness } from './styledFilter';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeBrightness), '$motion-brightness-amplification');
