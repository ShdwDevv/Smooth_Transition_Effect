import Highway from '@dogstudio/highway';
import Fade from './transition';
const H = new Highway.Core({
    // home:Fade,
    // about: Slide
    transitions:{
        default:Fade
    }
});