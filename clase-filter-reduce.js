//methods that iterate over an array.
//methods that DO NOT modify the original array (immutability)

//filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pairNumbers = numbers.filter((number) => number % 2 === 0)

console.log(pairNumbers)

//reduce() case1

const numberReduce = [1,2,3,4,5]
const total = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(total)

//reduce case 2

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "spray", "limit"]

const result = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }

    return accumulator}, {})

    console.log(result);

 // exercise: passing grade average

const grades = [34,67,80,70,46,45,87,90,96]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrades = passingGrades.reduce((sum,grade) => sum + grade, 0) / passingGrades.length

console.log(passingGrades);

console.log(averagePassingGrades)
;
;
;