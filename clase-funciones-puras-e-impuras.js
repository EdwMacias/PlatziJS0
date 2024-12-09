//funciones puras
//dada una misma entrada, se obtiene una misma salida

//side effects
//1. Modificar variables globales
//2. Modificar parametros
//3. solicitudes HTTP
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
//6. Obtener la hora actual

//estructura de una funcion pura
function sum(a,b) {
    console.log('a: ', a, 'b: ', b)
 return a + b
}
console.log(sum(3,5e3))

let total = 0 

function sumWithoutSideEffects(a) {
    total += total + a
    return total
}
console.log(sumWithoutSideEffects(5345345))
console.log(total)

//funcion pura
function square(x) {
    return x * x
}

function addTen(y) {
    return y + 10
}

console.log(square(addTen(3)))

const number = 5
const result = addTen(square(number))
console.log(result)