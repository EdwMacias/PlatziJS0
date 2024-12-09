//null
const snoopy = null
console.log(snoopy);
console.log(typeof snoopy);

//undefined
let name
console.log(name);
console.log(typeof name);

//symbol
const uniqueId = Symbol('id')
console.log(uniqueId);
console.log(typeof uniqueId)
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const id = Symbol('id')
let user = {}
user[id] = 123
console.log(user)

//bigint
const bigInt = 9007199254740991n
console.log(bigInt)
console.log(typeof bigInt)