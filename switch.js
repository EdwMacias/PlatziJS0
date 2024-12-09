// switch(expresion) {
//     case valor1:
//         // instrucciones
//         break
//     case valor2:
//         // instrucciones
//         break
//     case valor3:
//         // instrucciones
//         break
//     default:
//         // instrucciones
// }

let expresion = "peras"

switch (expresion) {
    case "naranjas":
        console.log("las naranjas cuestan 20.000 pesos");
    break
    case "Manzanas":
        console.log("las manzanas cuestan 10.000 pesos");
    break
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan 30.000 pesos");
    break

    default:
        console.log(`no tenemos stock de ${expresion}`);
    }