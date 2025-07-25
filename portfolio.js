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

