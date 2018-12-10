import makeSwing from './keyframes/makeSwing';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeSwing), '$motion-swing-amplification');
