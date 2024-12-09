const persona = {
  nombre: "Jhon",
  apellido: "Doe",
  direccion: {
    ciudad: "Bogota",
    pais: "Colombia",
    estado: "Cundinamarca",
    calle: "Calle 123",
    numero: "123",
  },
  edad: 30,
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  },
}

// console.log(persona);


console.log(persona.direccion);
console.log(persona.saludar());

persona.telefono = "1234567890";
console.log(persona.telefono);
console.log(persona);

persona.despedir = () => {
  console.log(`Adios, mi nombre es ${persona.nombre} ${persona.apellido}`);
}

console.log(persona.direccion.calle);

delete persona.telefono;

console.log(persona);

delete persona.despedir;

console.log(persona);