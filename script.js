window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000)

})

/* CURSOR */

const cursor=document.querySelector('.cursor');

window.addEventListener('mousemove',(e)=>{

cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';

})

/* 3D EFFECT */

VanillaTilt.init(document.querySelectorAll(".card"), {

max: 15,
speed: 400,
glare:true,
"max-glare":0.3,

});

/* PARTICLES */

tsParticles.load("particles-js", {

particles: {

number: {
value: 80
},

color: {
value: "#7f5cff"
},

shape: {
type: "circle"
},

opacity: {
value: 0.5
},

size: {
value: 3
},

move: {
enable: true,
speed: 2
},

links: {
enable: true,
distance: 150,
color: "#7f5cff",
opacity: 0.4
}

}

});