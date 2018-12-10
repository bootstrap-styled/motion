import makeSepia from './keyframes/makeSepia';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeSepia), '$motion-sepia-amplification');
