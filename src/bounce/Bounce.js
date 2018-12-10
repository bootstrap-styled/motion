import makeBounce from './keyframes/makeBounce';
import composeAmplification from '../templates/composeAmplification';
import composeAnimation from '../templates/composeAnimation';
/** @component */
export default composeAmplification(composeAnimation(makeBounce), '$motion-bounce-amplification');
