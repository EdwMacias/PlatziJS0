//capacidades que tienen las funciones al igual que otros tipos de datos

//1. Pasar funciones como argumentos --> (callback)
// function a () {}
// function b (a) {
//     b(a)
// }

// function a (){
//     function b () {}
//     return b
// }

//Asignar funciones a variables --> expresion de funcion

// const a = function () {}

//Tener propiedades y metodos

// function a () {}
// const obj = {}
// a.call(obj)

//Anidar funciones --> nested Functions

// function a () {
//     function b () {
//         function c () {}
//         c()
//     }
//     b()
// }
// a()

//Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 1',
    LaunchMessage: function  LaunchMessage() {
        console.log(`Welcome to ${this.name} 🚀`)
    }
}
rocket.LaunchMessage()

