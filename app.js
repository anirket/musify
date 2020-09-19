const logo = document.querySelectorAll('#logo path');
 

for(let i=0; i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

//stroke animation begins 



//delay given and display made none to the preloading page 
const div = document.querySelector('.music');
setTimeout(function(){
    div.style.display="none";

},5000);

//translate position of flap upwards and downwards in the main class
let flap = document.querySelector('.flap');
const translatebtn = document.querySelector('.translatebtn');
const main = document.querySelector('.main');
const images = document.querySelector('.images');
translatebtn.addEventListener('click', move)
function move(){
    translatebtn.style.transition="all 1.5s";
    flap.style.transition="all 1.5s";
    images.style.transition="all 1.5s ease";
    if(flap.style.transform && translatebtn.style.transform && images.style.opacity){
        flap.style.transform ='';
        translatebtn.style.transform ='';
        images.style.opacity='';
        
    }
    else{
        flap.style.transform="translateY(420px)";
        translatebtn.style.transform="rotate(180deg)";
        images.style.opacity="0";
    }
}







const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
   const navlinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        //toggle nav links 
        
         //animate lnks
        navlinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation ='';
            }
            else{
            link.style.animation =`navlinkfade 0.5s ease forwards ${index/7+1}s`;
            }
    });

   //burger animation 
   burger.classList.toggle('toggle');


  });

}   
//function invoked 
navslide();


