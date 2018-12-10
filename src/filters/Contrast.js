import makeContrast from './keyframes/makeContrast';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeContrast), '$motion-contrast-amplification');
