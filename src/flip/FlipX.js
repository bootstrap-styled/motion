import { makeFlipX } from './styledFlip';
import composeAnimation from '../templates/composeAnimation';
import composePerspective from '../templates/composePerspective';
/** @component */
export default composePerspective(composeAnimation(makeFlipX), '$motion-flip-perspective');
