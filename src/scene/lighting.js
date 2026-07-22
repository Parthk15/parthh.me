import * as THREE from "three";


export function createLights(scene){


    // soft overall light
    const ambient = new THREE.AmbientLight(
        0xffffff,
        1
    );

    scene.add(ambient);



    // pink light
    const pinkLight = new THREE.PointLight(
        0xff0055,
        20,
        15
    );


    pinkLight.position.set(
        3,
        2,
        4
    );


    scene.add(pinkLight);



    // blue light
    const blueLight = new THREE.PointLight(
        0x0044ff,
        15,
        15
    );


    blueLight.position.set(
        -3,
        -2,
        3
    );


    scene.add(blueLight);



    // white rim light
    const rimLight = new THREE.PointLight(
        0xffffff,
        8,
        10
    );


    rimLight.position.set(
        0,
        3,
        -4
    );


    scene.add(rimLight);


}