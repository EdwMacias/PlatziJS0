//Methods that do not modify the original array (inmutability)

const morseCode1 = ['....', '---'] // H O 
const morseCode2 = ['.-..', '.-'] // L A

// Combine with concat() - way 1

const morseFull = morseCode1.concat(morseCode2)
console.log(morseCode1);
console.log(morseCode2);
console.log('concat 1 ',morseFull);

// combine with concat() - way 2

const morseFull2 = [].concat(morseCode1,morseCode2)
console.log('concat 2 ',morseFull2);

// Combine with spread operator - way 1

function combineMorseMessages (morseCode1, morseCode2) {
    console.log('spread   ', [...morseCode1, ...morseCode2])
}

const numbers = [1, 2, 3]
const string = 'string'

// Combine with spread operator - way 2
combineMorseMessages(numbers, string)

// join 

const morseCodeMessageString = morseFull.join('')
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessageString)
