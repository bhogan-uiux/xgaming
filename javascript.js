const handburger=document.querySelector(".handburger");
const nav=document.querySelector(".nav");
handburger.addEventListener("click",()=>{
    handburger.classList.toggle("active");
    nav.classList.toggle("active");

});


const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX -10 + "px";
  cursor.style.top = e.clientY -10 + "px";

  cursor2.style.left = e.clientX -18 + "px";
  cursor2.style.top = e.clientY -18 + "px";
});

const area = document.querySelector(".area");
const video =document.querySelector(".video_1");
const nextbutton = document.querySelector(".playvideo");

const videolist = [
  './videos/hero-1.mp4','./videos/hero-2.mp4','./videos/hero-3.mp4',
];

let index = 0;
nextbutton.addEventListener("click", function(){
    index++;

  video.src = videolist[index];
  video.load();
video.play();

 if (index >= 2) {
    index = -1; 
  }

});

