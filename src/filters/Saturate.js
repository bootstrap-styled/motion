import { makeSaturate } from './styledFilter';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeSaturate), '$motion-saturate-amplification');
