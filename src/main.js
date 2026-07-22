import * as THREE from "three";

import { createScene } from "./scene/scene.js";

import { createCamera } from "./scene/camera.js";

import "./style.css";



const scene = createScene();


const camera = createCamera();



const renderer = new THREE.WebGLRenderer({

    antialias:true

});


renderer.setSize(

    window.innerWidth,

    window.innerHeight

);


renderer.setPixelRatio(
    window.devicePixelRatio
);



document.body.appendChild(
    renderer.domElement
);





function animate(){


    requestAnimationFrame(
        animate
    );


    const object = scene.userData.object;



    // rotation

    object.rotation.x += 0.004;

    object.rotation.y += 0.008;



    // floating

    object.position.y =
        Math.sin(
            Date.now()*0.002
        ) * 0.25;



    renderer.render(

        scene,

        camera

    );


}


animate();





// responsive

window.addEventListener(
    "resize",
    ()=>{


        camera.aspect =
        window.innerWidth /
        window.innerHeight;


        camera.updateProjectionMatrix();



        renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );


    }
);