let menu = document.querySelector(".menu")
let times = document.querySelector(".slide .close")
let body = document.querySelector('body')

menu.addEventListener("click", ()=> {
    body.classList.toggle("activeSlide")
})

times.addEventListener("click", ()=> {
    body.classList.toggle("activeSlide")
})
 
