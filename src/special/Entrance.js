import makeEntrance from './keyframes/makeEntrance';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeEntrance), '$motion-entrance-amplification');
