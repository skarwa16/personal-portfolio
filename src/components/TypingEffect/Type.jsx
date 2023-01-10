import React from 'react'; 
import './Type.css';
import Typewriter from 'typewriter-effect';

const Type = () => {
    <div>
        <Typewriter style={{fontFamily: "var(--font-primary)", fontSize: "4rem"}} onInit={(typewrite) => {
        typewrite.typeString("Product Designer")
        .pauseFor(2000)
        .deleteAll()
        .start();
        }}/>
    </div> 
}

export default Type; 