class Animal {
  constructor(nombre, tipo, sonido) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.sonido = sonido;
  }
  emitirSonido(){
    console.log(`El animal emite un ${this.tipo}`)
  }
}