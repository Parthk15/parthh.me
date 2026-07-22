import * as THREE from "three";
import { createLights } from "./lighting.js";


export function createScene() {

    const scene = new THREE.Scene();


    // Background
    scene.background = new THREE.Color(0x020202);


    // Lights
    createLights(scene);



    // Geometry
    const geometry = new THREE.IcosahedronGeometry(
        1,
        3
    );



    // Premium material
    const material = new THREE.MeshPhysicalMaterial({

        color: 0xff0055,

        metalness: 0.8,

        roughness: 0.15,

        clearcoat: 1,

        clearcoatRoughness: 0.1

    });



    const crystal = new THREE.Mesh(
        geometry,
        material
    );


    scene.add(crystal);



    // store object for animation
    scene.userData.object = crystal;



    return scene;

}