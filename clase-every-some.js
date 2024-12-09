//Methods that do not modify the original array (immutability)

//every()
const ages = [21, 25, 30, 19, 22]

const allAdults = ages.every((age) => age >= 18)
console.log(ages)
console.log(allAdults)


//some()
const hasAdults = ages.some((age) => age >= 25)
console.log(ages)
console.log(hasAdults)