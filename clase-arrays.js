// how to create arrays

//1. new Array() or Array()

const fruits = Array("apple", "banana", "orange")
console.log(fruits);

const numbers = Array(1,2,3,4,5)
console.log(numbers);

//2. array literal

const numbers2 = [1,2,3,4,5]
console.log(numbers2);

const emptyArray = []
console.log(emptyArray);

const sports = ["soccer", "baseball", "football"]
console.log(sports);

const recipeIngredients = [
    "Flour", true,
    2,
    { ingredients: "milk", quantity: 1 },
    false
]
console.log(recipeIngredients);

//accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

//lenght property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// mutability

fruits.push("watermelon")
console.log(fruits);

//inmutability

const newFruits = fruits.concat("kiwi", "grape")
console.log(fruits, newFruits)

//checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

//practical exercise: sum of all elements

const numberArray = [1,2,3,4,5,6,7,8,9,10]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
    console.log(sum);
}
