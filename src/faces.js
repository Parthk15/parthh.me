import aboutImg from "./images/about.png";
import projectsImg from "./images/projects.png";
import skillsImg from "./images/skills.png";
import contactImg from "./images/contact.png";
import experienceImg from "./images/experience.png";


export function createFaces(){

    return {

        front: createFace("face--front","ABOUT",aboutImg),

        right: createFace("face--right","PROJECTS",projectsImg),

        left: createFace("face--left","SKILLS",skillsImg),

        back: createFace("face--back","CONTACT",contactImg),

        top: createFace("face--top","EXPERIENCE",experienceImg),

        bottom: createFace("face--bottom","PARTH",aboutImg)

    };

}



function createFace(side,title,img){

    const face=document.createElement("div");

    face.className=`face ${side}`;


    face.innerHTML=`

        <img class="face-bg" src="${img}">

        <div class="glass"></div>

        <h1>${title}</h1>

    `;


    return face;

}