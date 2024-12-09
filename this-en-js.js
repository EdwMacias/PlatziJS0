/*
this -- class
this --- objeto -- class
*/

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

const persona1 = new Persona('Diego', 20)
console.log(persona1)

persona1.nuevoMetodo = function(){
    console.log(`mi nombre es: ${this.nombre} y mi edad es: ${this.edad}`)
}
persona1.nuevoMetodo()

