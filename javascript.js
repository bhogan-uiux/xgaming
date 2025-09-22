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

