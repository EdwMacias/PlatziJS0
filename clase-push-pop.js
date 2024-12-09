// Methods to modify original array (mutability)

// // push()
// const countries = ["col", "mex", "bol"]

// const countries2 = countries.push("pe", "ger")

// console.log(countries)
// console.log(countries2)
// // pop()

// const removeCountry = countries.pop()

// console.log(countries)
// console.log(removeCountry)


//agregar un nuevo libro de la parte superior del stack
//remover un libro del tope del stack
// mostrar el stack

//implementa un loop que permita a los usuarios interactuar 
//con el stack hasta que escoja salir

const bookCart = []
const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeBookFromCart'
const VIEW_CART_ACTION = 'viewCart'

const viewCart = () => {
    console.log('carrito de libros: ',bookCart)
}

function performCartAction(action, newBook) {
    switch(action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION: 
            if(bookCart.length === 0) {
                console.log('no hay libros en el carrito')
            }else {
             const removedBook = bookCart.pop()
             console.log(`libro removido del carrito: ${removedBook}`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('no se reconoce la accion, seleccione una opcion valida')
            break
        }
}


performCartAction(ADD_TO_CART_ACTION, 'harry potter')
performCartAction(VIEW_CART_ACTION)
performCartAction(ADD_TO_CART_ACTION, 'moby DICK')
performCartAction(VIEW_CART_ACTION)
performCartAction(REMOVE_FROM_CART_ACTION)
performCartAction(VIEW_CART_ACTION)
