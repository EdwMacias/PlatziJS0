// casa = Objeto Casita del perro
// letrero = This Fido
//Perro = Funcion constructora
//implicit binding - Enlace implicito
const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`This is ${this.dogName}`)
    }
}

house.dogGreeting()
//enlace explicito - explicit binding
function dogGreeting() {
    console.log(`This is ${this.dogName}`)}

const newHouse = {
    dogName: 'coco',
    
}   

dogGreeting.call(newHouse)

function newDogGreeting(owner, address) {
    console.log(`This is ${this.dogName}, my owner is ${owner} and I live in ${address}`)}

const owner = 'edwar'
const address = 'NY'

newDogGreeting.call(newHouse, owner, address)