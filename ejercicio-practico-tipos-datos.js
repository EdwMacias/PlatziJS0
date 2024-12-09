//social media profile

//1. profile name
const username = 'platzi'
const fullName = 'platzi master'
const age = 28
const isStudent = true

const address = {
    street: 'Main street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
}

//hobbies

const hobbies = ['music', 'sport', 'art']

//social media

const personalizedBio = `My name is ${username}, I'm ${age} and I'm ${isStudent ? 'a student' : 'not a student'} in Platzi. I live in ${address.city}, ${address.state}. My hobbies are: ${hobbies.join(', ')}`

console.log(personalizedBio)