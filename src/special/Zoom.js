import makeZoom from './keyframes/makeZoom';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeZoom), '$motion-zoom-amplification');
