//methods that iterate over an array
//methods that DO NOT modify the original array (immutability)

//find()
const multipleof5 = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
const firstNumbeerGreaterThan10 = multipleof5.find((number) => number > 10)

console.log(firstNumbeerGreaterThan10)


//findIndex()

const multipleof5Index = multipleof5.findIndex((number) => number > 10)

console.log(multipleof5Index)

//exercise: Raffle winner verification program

const winningParticipants = [
    { name: "John", ticketNumber: 25 },
    { name: "Sarah", ticketNumber: 30 },
    { name: "Michael", ticketNumber: 35 },
    { name: "Emily", ticketNumber: 40 },
    { name: "David", ticketNumber: 45 },
]

function findWinnerByName (name) {
    const winner = winningParticipants.find((participant) => participant.name === name)
    return winner || 'No winner found whit this name.'
}

function findIndexWinnerByTicket (ticketNumber) {
    const index = winningParticipants.findIndex((participant) => participant.ticketNumber === ticketNumber)
    return index  !== -1  ? index : 'No winner found whit this ticket number.'
}

function displayWinnerInformation (winner) {
    if(winner !== undefined && winner !== null && winner !== 'No winner found whit this name.') {
        console.log('Winner info: ', winner)
    }else {
        console.log('No winner found');
    }
}

const winnerByName = findWinnerByName('Sarah')
const winnerByTicket = findIndexWinnerByTicket(30)
displayWinnerInformation(winnerByTicket)
console.log('index of winner: ', winnerByTicket);