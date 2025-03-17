        let i = 0;
        let txt ="I'am a Web Developer.";
        let speed = 135;
    
        window.onload = function typeWrite () {
            if (i < txt.length) {
                document.getElementById("type").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWrite, speed);
            }
        }

        let menu = document.querySelector(".menu")
        let times = document.querySelector(".slide .close")
        let body = document.querySelector('body')

        menu.addEventListener("click", ()=> {
            body.classList.toggle("activeSlide")
        })

        times.addEventListener("click", ()=> {
            body.classList.toggle("activeSlide")
        })
 
