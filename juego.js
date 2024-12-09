const numeroSecreto = Math.floor(Math.random() * 10 + 1)
console.log(`este es el numero secreto: ${numeroSecreto} `)
const numeroJugador = parseInt(prompt('Ingresa un numero del 1 al 10'))

console.log(`este es el numero con el que juegas: ${numeroJugador} `)
if (numeroJugador === numeroSecreto) {
    alert('Ganaste')
} else {
    alert('Perdiste')
}