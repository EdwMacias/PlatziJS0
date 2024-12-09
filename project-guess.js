
// let intentos = 3;
// let pista = "p"
// const palabraOculta = "platzi"
// do {
//     console.log(`La palabra oculta empieza con ${pista}`)
//     let adivinanza = prompt("Introduce la palabra oculta");
// } while (intentos > 0)

//     console.log(`no te quedan mas intentos`);

// let oportunidades = 3
// const palabraOculta = "platzi"
// let pista = "p"

// do{
//     alert(`La palabra oculta empieza con ${pista}`)
//     let prueba = prompt(`adivina una palabra: `)
//     if(prueba == palabraOculta){
//         alert("Felicidades, adivinaste la palabra")
//     }else{
//         prompt("la palabra no es correcta, intenta de nuevo: ")
//         oportunidades = oportunidades - 1
//     }
// } while (prueba != palabraOculta && oportunidades > 0)

let palabraOculta = "javascript";
let intentos = 3;
let pista = "j";
function verificarSuposicion(suposicion, palabraOculta) {
    if (suposicion.toLowerCase() === palabraOculta) {
        return true
    } else {
        return false
    }
}

function jugarAdivinaLaPalabra() {
    alert(`por favor, adivina la palabra,
        intentos restantes: ${intentos}`);
    alert("pista: " + pista);

    while (intentos > 0){
        let suposicion = prompt("introduce una palabra");

        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert("Felicidades, adivinaste la palabra");
            break;
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`intentos restantes: ${intentos}`);
            } else {
                alert(`no te quedan mas intentos, la palabra era ${palabraOculta}`);
            }
        }
    }
}

jugarAdivinaLaPalabra()