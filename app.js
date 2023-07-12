// All js 

document.querySelector(".header__feature-breadcrumb").addEventListener("click",()=>{
  console.log("work")
})

if(window.innerWidth < 768){
  window.addEventListener("scroll" , () => {
    if (scrollY > 600){
      document.querySelector(".header__wrapper").style.visibility = "visible";
      document.querySelector(".header").style.background = "#d9d9d9";
    }else{
      document.querySelector(".header__wrapper").style.visibility = "hidden"
      document.querySelector(".header").style.background = "transparent";
    }
  })
}