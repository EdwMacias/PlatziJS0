//methods that modify the original array (mutability)

// splice()
const countries = ["col", "mex", "bol", "pe"]

const countries2 = countries.splice(2, 1, "ar")

console.log(countries)
console.log(countries2)

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = numbers.reverse()

console.log(numbers);
console.log(reversedNumbers)

//sort() para numeros

const unsortedNumbers1 = [4,18,1,62,34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1);

const unsortedNumbers2 = [4,18,1,62,34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
// 4 - 18 = -14
// 1 - 62 = -61
// 34 - 34 = 0
console.log(unsortedNumbers2);
console.log(sortedNumbers)

//sort() para strings UTF-16

const cities = ["Lima", "Buenos Aires", "Santiago", "Montevideo"]
const sortedCities = cities.sort()

console.log(cities);
console.log(sortedCities)

const ages = [32, 33, 16, 40]
console.log(ages.fill(0,2,4));

console.log(ages.fill(15,1));

