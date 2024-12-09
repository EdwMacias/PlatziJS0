const personalizedMessage = () => 'Goodbye World'

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = ownMessage
}

const Falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('falcon heavy', personalizedMessage)
console.log(Falcon9Rocket.name)
console.log(falconHeavyRocket.launchMessage())


const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageforArrowFunction = () => 'successfully launched'
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageforArrowFunction)
console.log(falcon9Rocket1.name, falcon9Rocket1.launchMessage())
