// includes() with numbers

const numbers = [ 1, 2, 3, 4, 5]
// const result1 = numbers.includes(3) // 2
// console.log(result1)
const result2 = numbers.includes(6) // false
console.log(result2)

//indexOf() 

const result3 = numbers.indexOf(1) // 2
console.log(result3)

//lastIndexOf()

const numbersAgain = [ 2,4,6,8,10,6]
const result4 = numbersAgain.lastIndexOf(6) // 5    
console.log(result4)

const result5 = numbersAgain.lastIndexOf(3) // 5    
console.log(result5)

// Ejercicio: Encontrando Índices de substring

const stringArray1 = ["apple", "banana", "orange", "grape", "banana", "kiwi"];

const target = "banana";

function findStringIndicesInArray(array, target) {
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1,
  };
  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true;
      result.firstOccurrenceIndex = array.indexOf(target);
      result.lastOccurrenceIndex = array.lastIndexOf(target);
    }
  });
  return result;
}

const result = findStringIndicesInArray(stringArray1, target);
console.log(result);

