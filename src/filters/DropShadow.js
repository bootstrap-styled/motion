import makeDropShadow from './keyframes/makeDropShadow';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeDropShadow), '$motion-drop-shadow-amplification');
