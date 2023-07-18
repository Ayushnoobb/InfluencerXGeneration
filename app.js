function fixedNavbar(){
  console.log(document.querySelector("#header").clientHeight);
}


function hamburgerToogle(){
  document.querySelector(".button").addEventListener("click",()=>{
    document.querySelector(".menu").classList.toggle("-open");
    document.querySelector(".button").classList.toggle("-menu-open");
  })
}

window.addEventListener("load" , ()=>{
  fixedNavbar();
  hamburgerToogle();
})