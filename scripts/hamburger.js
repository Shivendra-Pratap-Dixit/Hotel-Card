let menu=document.querySelector(".menu");
let ham=document.querySelector(".hamburger");
ham.addEventListener("click",show);
function show(){
    menu.style.display='flex';
    menu.style.top='0';
}
