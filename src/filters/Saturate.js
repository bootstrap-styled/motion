import makeSaturate from './keyframes/makeSaturate';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeSaturate), '$motion-saturate-amplification');
