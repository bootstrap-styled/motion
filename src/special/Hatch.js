import { makeHatch } from './styledSpecial';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeHatch), '$motion-hatch-amplification');
