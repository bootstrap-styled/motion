import { makeLightOut } from './styledLight';
import composeAnimation from '../templates/composeAnimation';
import composeDistance from '../templates/composeDistance';
import composeRotation from '../templates/composeRotation';
/** @component */
export default composeRotation(composeDistance(composeAnimation(makeLightOut), '$motion-light-out-distance'), '$motion-light-out-rotation');
