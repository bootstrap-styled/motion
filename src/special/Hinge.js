import { makeHinge } from './styledSpecial';
import composeAnimation from '../templates/composeAnimation';
import composeAmplification from '../templates/composeAmplification';
export default composeAmplification(composeAnimation(makeHinge), '$motion-hinge-amplification');
