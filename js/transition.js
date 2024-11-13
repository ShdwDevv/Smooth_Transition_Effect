import Highway from '@dogstudio/highway';
import Tween from 'gsap';
// import { Tween } from 'gsap/gsap-core';
import { TimelineLite } from 'gsap/gsap-core';

class Fade extends Highway.Transition{
    in({from,to,done}){
        const tl = new TimelineLite();
        tl.fromTo(to,0.5,{left:'-100%',top:'50%'},{left:'0%'})
        .fromTo(to,0.5,{height: '2vh'},{height:'90vh',top:'10%',onComplete : function(){
            from.remove(); // to remove the current content
            done();
        }})
        .fromTo(to.children[0],2,{opacity : 0},{opacity : 1})
    }
    out({from,done}){
        done();//Go to in
    }
}
export default Fade;