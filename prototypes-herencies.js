// prototype
class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido")
    }
}
class Perro extends Animal {
    constructor(nombre, tipo, raza){
        super(nombre,tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("El perro ladra")
    }
    correr(){
        console.log(`${this.nombre}  corre rapidamente`)
    }
}
const perro1 = new Perro("bobby", "perro", "labrador")
console.log(perro1)
perro1.correr()
perro1.emitirSonido()
const animal1 = new Animal("gato", "mamifero")
animal1.emitirSonido()
perro1.nuevoMetodo = function(){
    console.log("nuevo metodo")
};
perro1.nuevoMetodo()
Perro.prototype.segundoMetodo = function(){
    console.log("es otro metodo")
};
perro1.segundoMetodo()

let currentPrototype = Object.getPrototypeOf(perro1);

for(;currentPrototype !== null;
    currentPrototype = Object.getPrototypeOf(currentPrototype)
) {
    console.log(currentPrototype)}