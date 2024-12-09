//methods that iterate over an array
//methods that DO NOT modify the original array (immutability)

//map()

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map((number) => number * 2)

console.log(doubledNumbers)

const squaredNumbers = numbers.map((number) => number * number)

console.log(squaredNumbers)

//forEach()

const colors = ["red", "green", "blue"]
colors.forEach((color) => {
    console.log(color)
})
//cualquiera funciona, depende del uso
const iteratedColors = colors.forEach((color) => {
    console.log(color)
})
console.log(iteratedColors)

//temps

const tempsInFarenheit = [104, 32, 68, 95, 212]
const tempsInCelsius = tempsInFarenheit.map((temp) => (5/9) * (temp - 32))

console.log('temps in celsius: ', tempsInCelsius)
console.log('temps in farenheit: ', tempsInFarenheit)

//suma de elementos en una lista

const newNumbers = [1, 345, 45, 4, 5]
let suma = 0

newNumbers.forEach((number) => {
    suma += number
})
console.log('lista de numeros: ', newNumbers)
console.log('suma: ', suma)