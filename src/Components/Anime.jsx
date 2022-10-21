import React from "react";
import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from 'animejs/lib/anime.es.js';
// import anime from 'anime.es.js';
// import anime from 'anime.es.js';
import './Anime.css'


const Form2=() =>{
    
const test = new Letterize({
      targets: "#animateMe"
    });

    var animation = anime.timeline({
      targets: test.listAll,
      delay: anime.stagger(50),
      loop: true
    });

    animation
      .add({
        translateY: -40
      })
      .add({
        translateY: 0
      });

return(
    <div id="animateMe">Letterize.js and Anime.js</div>
)

    }

    export default Form2;