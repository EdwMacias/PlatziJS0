const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name}  says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${fictionalCharacter.name}  says: ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunction('With great powers, come great responsabilities')
fictionalCharacter.messageWithArrowFunction('With great powers, come great doctors octopus')

