/**
Promise()

/**Estados:
pending
Fullfilled
Rejected


//callbacks:
resolve
reject

then() //se ejecuta cuando la promesa se resuelve
catch() //se ejecuta cuando la promesa se rechaza

**/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationalSuccessful = true;
        if (operationalSuccessful) {
            resolve('La operacion fue exitosa')
        } else {
            reject('La operacion fallo')
        }
    },2000)
})

promise.then(successMessage => {
    console.log(successMessage)
}).catch(errorMessage => {
    console.log(errorMessage)
})  