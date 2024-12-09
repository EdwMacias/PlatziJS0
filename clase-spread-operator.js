// 1. copy an array
const originalArray = [1, 2, 3, 4, 5]
const copiedArray = [...originalArray]
console.log(copiedArray)

// 2. ccombining arrays

const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]
const combinedArray = [...firstArray, ...secondArray]
console.log(combinedArray)

// 3. Creating arrays with additional elements

const baseArray = [1, 2, 3]

const newArray = [...baseArray, 4, 5, 6]
console.log(newArray)

function sum(a,b,c){
    return a + b + c
}
const numbers = [1,2,3]
sum(...numbers)
console.log(sum(...numbers));