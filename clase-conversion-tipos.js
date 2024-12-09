// explicit type casting

const string = '42'
const integer = parseInt(string)
console.log(integer, typeof integer)


// implicit type casting
const number = 42
const string2 = number.toString()
console.log(string2, typeof string2)