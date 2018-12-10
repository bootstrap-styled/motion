import makeOpacity from './keyframes/makeOpacity';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeOpacity), '$motion-opacity-amplification');
