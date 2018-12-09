import { makeLightIn } from './styledLight';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeDistance(composeAnimation(makeLightIn), '$motion-light-in-distance'), '$motion-light-in-rotation');
