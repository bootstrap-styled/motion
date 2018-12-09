import { makeFlip } from './styledFlip';
import composeAnimation from '../templates/composeAnimation';
import composePerspective from '../templates/composePerspective';
/** @component */
export default composePerspective(composeAnimation(makeFlip), '$motion-flip-perspective');
