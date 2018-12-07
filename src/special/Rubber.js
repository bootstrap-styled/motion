import { makeRubber } from './styledSpecial';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeRubber), '$motion-rubber-amplification');
