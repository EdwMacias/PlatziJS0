//1. tipo entero y decimal

const entero = 42
const decimal = 4.2

console.log(typeof entero, typeof decimal);

const cientifico = 4.2e10
console.log(cientifico);

//3. infinitos y NaN

const inf = Infinity
const nan = NaN
console.log(inf, nan);

// operaciones aritmeticas

//1. suma, resta, multiplicacion y division

const suma = 2 + 2
const resta = 2 - 2
const multiplicacion = 2 * 2
const division = 2 / 2
console.log(suma, resta, multiplicacion, division);

//2. modulo y exponenciacion
const modulo = 15 % 8 
const exponenciacion = 2 ** 3
console.log(modulo, exponenciacion);

//precision 

const resultado = 0.1 + 0.2
console.log(resultado);
console.log(resultado.toFixed(1));

console.log(resultado === 0.3);

//operaciones avanzadas

const raizCuadrada = Math.sqrt(9)
console.log(raizCuadrada);

const valorAbsoluto = Math.abs(-9)
console.log(valorAbsoluto);

const aleatorio = Math.random()
console.log(aleatorio);