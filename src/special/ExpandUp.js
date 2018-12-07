import { makeExpandUp } from './styledSpecial';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeExpandUp), '$motion-expand-up-amplification');
