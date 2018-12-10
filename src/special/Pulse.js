import makePulse from './keyframes/makePulse';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makePulse), '$motion-pulse-amplification');
