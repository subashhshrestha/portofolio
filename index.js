// arr=[];
// let myDiv=document.getElementById("todo");
// function show(e){
//     e.preventDefault();
//     console.log(e.target.name.value);
//     let value=e.target.name.value
//     let node =document.createElement("li");
//     let text=document.createTextNode(value);
//     node.appendChild(text);
//     myDiv.appendChild(node);
// }
let imgs=document.querySelector('#profileImage');
let a = document.querySelector('#about');
let about=document.querySelector('.topCover');

let experience=document.querySelector('#experience');
let e = document.querySelector('.experience');

let skills=document.querySelector('#skills');
let s = document.querySelector('.skills');


let c= document.querySelector('.contact');



console.dir(about)
console.dir(e)

console.dir(s)

a.addEventListener('click',()=>{
    window.scrollTo({
        top:about.offsetTop,
        behavior:'smooth'
    })
});
imgs.addEventListener('click',()=>{
    window.scrollTo({
        top:about.offsetTop,
        behavior:'smooth'
    })
});

experience.addEventListener('click',()=>{
    window.scrollTo({
        top:e.offsetTop,
        behavior:'smooth'
    })
});
skills.addEventListener('click',()=>{
    window.scrollTo({
        top:s.offsetTop,
        behavior:'smooth'
    })
});

window.onscroll=function (){
    // console.log(window.pageYOffset,about.offsetTop);
    if(window.pageYOffset>=about.offsetTop && window.pageYOffset<e.offsetTop-20){
        console.log("about");
        a.style.color='white';
        experience.style.color='rgb(165, 163, 163)';
        skills.style.color='rgb(165, 163, 163)';
    }
    else if(window.pageYOffset>=e.offsetTop-30 && window.pageYOffset<=s.offsetTop-30){
        console.log("alu");
        experience.style.color='white';
        a.style.color='rgb(165, 163, 163)';
        skills.style.color='rgb(165, 163, 163)';

    }
    else if(window.pageYOffset>=s.offsetTop-20 && window.pageYOffset<=c.offsetTop-20){
        console.log('skill')
        skills.style.color='white';
        experience.style.color='rgb(165, 163, 163)';
        a.style.color='rgb(165, 163, 163)';
    }
    else{
        
    }
}