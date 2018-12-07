import { makeRollOut } from './styledSpecial';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
import composeDistance from '../templates/composeDistance';
/** @component */
export default composeDistance(composeAmplification(composeAnimation(makeRollOut), '$motion-roll-out-amplification'), '$motion-roll-out-distance');
