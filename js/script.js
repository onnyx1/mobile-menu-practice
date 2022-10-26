document.querySelector(".sub-menu").classList.add("hide");

document.querySelector(".test").addEventListener("click", ()=> {

    if(document.querySelector(".sub-menu").classList.contains("hide")){
        document.querySelector(".sub-menu").classList.remove("hide");
        document.querySelector(".sub-menu").classList.add("show");
    } else {
        document.querySelector(".sub-menu").classList.remove("show");
        document.querySelector(".sub-menu").classList.add("hide");
    }

})


document.querySelector(".test1").addEventListener("click", ()=> {
    document.querySelector(".sub-menu1").classList.toggle("open");
})


document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("showMenu");

})