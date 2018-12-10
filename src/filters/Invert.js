import makeInvert from './keyframes/makeInvert';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeInvert), '$motion-invert-amplification');
