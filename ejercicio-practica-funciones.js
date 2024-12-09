// create Powerpuff girl object
function powerpuffGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function () {
        console.log(`Name: ${this.name}\nColor: ${this.color}\nSuperpower: ${this.superpower} \n Is Leader: ${this.isLeader ? 'Leader' : 'Not Leader'}\n`)
    }

    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} is now a leader!`)
    }
}

const blossom = new powerpuffGirl('Blossom', 'pink', 'Ice Breath')
const buttercup = new powerpuffGirl('Buttercup', 'green', 'Super Strong')
const bubbles = new powerpuffGirl('Bubbles', 'blue', 'Flight')

blossom.displayInfo()
bubbles.displayInfo()
buttercup.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
bubbles.displayInfo()
buttercup.displayInfo()