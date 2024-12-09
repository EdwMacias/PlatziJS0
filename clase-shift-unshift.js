//methods that modify the original array (mutability)

//shift()
const colores = ["rojo", "azul", "verde"]

const colores2 = colores.shift()

console.log(colores)
console.log(colores2)


//unshift()
const colores3 = ["rojo", "azul", "verde"]

const colores4 = colores3.unshift("amarillo")

console.log(colores3)
console.log(colores4)

//manejar una playlist de canciones

const playlist = []
const ADD_TO_PLAYLIST_ACTION = 'addToPlaylist'
const REMOVE_FROM_PLAYLIST_ACTION = 'removeFromPlaylist'
const VIEW_PLAYLIST_ACTION = 'viewPlaylist'

const viewPlaylist = () => {
    console.log('playlist: ', playlist)
}

function performPlaylistAction(action, newSong) {
    switch(action) {
        case ADD_TO_PLAYLIST_ACTION:
            playlist.push(newSong)
            break;
        case REMOVE_FROM_PLAYLIST_ACTION:
            if(playlist.length === 0) {
                console.log('no hay canciones en la lista')
            } else {
                const removedSong = playlist.shift()
                console.log(`cancion removida de la lista: ${removedSong}`)
            }
            break;
        case VIEW_PLAYLIST_ACTION:
            viewPlaylist()
            break;
        default:
            console.log('no se reconoce la accion, seleccione una opcion valida')
            break
    }
}

performPlaylistAction(ADD_TO_PLAYLIST_ACTION, 'cancion 1')
performPlaylistAction(ADD_TO_PLAYLIST_ACTION, 'cancion 2')
performPlaylistAction(ADD_TO_PLAYLIST_ACTION, 'cancion 3')
performPlaylistAction(ADD_TO_PLAYLIST_ACTION, 'cancion 4')
performPlaylistAction(REMOVE_FROM_PLAYLIST_ACTION)
performPlaylistAction(VIEW_PLAYLIST_ACTION)
