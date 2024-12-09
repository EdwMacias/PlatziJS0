class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  despedida() {
    console.log(`Adios, mi nombre era ${this.nombre} ${this.apellido}`);
  }
}

const persona1 = new Persona("Diego", "Garcia", 20);
const persona2 = new Persona("Nico", "Garcia", 20);
const persona3 = new Persona("Nico", "Garcia", 20);

console.log(persona1, persona2, persona3);


persona1.nacionalidad = "colombiano";

Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}

persona1.saludar();

persona2.saludar();

console.log(Persona);
