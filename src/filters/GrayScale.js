import makeGrayScale from './keyframes/makeGrayScale';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
/** @component */
export default composeAmplification(composeAnimation(makeGrayScale), '$motion-grayscale-amplification');
