const boton1 = document.getElementById("study");
const boton2 = document.getElementById("break");
const cronometro = document.getElementById("cronometro");

boton1.addEventListener("click", () => {
    let minutos = 9;
    let segundos = 59;
    if (minutos < 10){
        cronometro.textContent="0"+minutos+":"+segundos;
    } else if (minutos>=10){
        cronometro.textContent=minutos+":"+segundos;
    }

    let intervaloS = setInterval(function() {
        segundos -= 1;
        if (segundos < 0){
            minutos -= 1;
            segundos = 59;
        }

        if (minutos <= 0 && segundos <= 0){
            clearInterval(intervaloS);
            minutos = 0;
            segundos = 0;
        }

        if (minutos < 10 && segundos < 10){
            cronometro.textContent="0"+minutos+":"+"0"+segundos;
        } else if (minutos < 10 && segundos >= 10){
            cronometro.textContent="0"+minutos+":"+segundos;
        } else if (minutos >= 10 && segundos < 10){
            cronometro.textContent=minutos+":"+"0"+segundos;
        } else {
            cronometro.textContent=minutos+":"+segundos;
        }
    }, 1000);
})

boton2.addEventListener("click", () => {
    let minutos = 4;
    let segundos = 59;
    cronometro.textContent="0"+minutos+":"+segundos;

    let intervaloS = setInterval(function() {
        segundos -= 1;
        if (segundos < 0){
            minutos -= 1;
            segundos = 59;
        }

        if (minutos <= 0 && segundos <= 0){
            clearInterval(intervaloS);
            minutos = 0;
            segundos = 0;
        }

        if (minutos < 10 && segundos < 10){
            cronometro.textContent="0"+minutos+":"+"0"+segundos;
        } else if (minutos < 10){
            cronometro.textContent="0"+minutos+":"+segundos;
        }
         else {
            cronometro.textContent=minutos+":"+segundos;
        }
    }, 1000);
})