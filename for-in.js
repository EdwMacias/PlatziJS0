/* 
for in --> objetos
propiedades = valor

arrays, strings (contienen elementos de una lista)


for (variable in objeto) {
    //codigo a ejecutar
}
*/

const listaDeCompras = {
    manzanas: 10,
    peras: 20,
    naranjas: 30,
    uva: 50
}

for (fruta in listaDeCompras) {
    console.log(fruta)
}

for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`) // console.log(`fruta, listaDeCompras[fruta])
}

// for (fruta of listaDeCompras) {
//     console.log(fruta)
// }ERROR:  NO ES ITERABLE