const hamburger = document.querySelector("span");
const menus = document.querySelector(".menus");
const closeMenu = document.querySelector(".closebtn");
function show(){

 menus.style.width = "100%"; 
 closeMenu.style.fontSize = "60px";


};

function closeRight(){

    menus.style.width = "0%"; 
    closeMenu.style.fontSize = "80px";  
   
};

closeMenu.addEventListener("click", closeRight)
hamburger.addEventListener("click", show)