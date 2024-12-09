const fruits = ["apple", "banana", "orange"]
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5)
console.log(number)

//2. Arrar literal syntax

const oneNumber = [12]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ["soccer", "baseball", "football"]
console.log(sports)

const recipeIngredients = [
    "Flour", 
    true,
    2,
    { ingredient: "milk", quantity: '1 cup' },
    false
]
console.log(recipeIngredients)

//Accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit) 

//lenght property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutating an array

fruits.push("pineapple")
console.log(fruits)

// inmutability

const newFruits = fruits.concat(['grape','kiwi'])
console.log(fruits)
console.log(newFruits)