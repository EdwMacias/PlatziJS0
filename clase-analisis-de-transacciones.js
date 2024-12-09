// exercise: transaction analysis

const transactions = [
    {
        id: 1,
        description: "Grocery shopping",
        amount: -50 
    },
    {
        id: 2,
        description: "Salary Deposit",
        amount: 5000
    },
    {
        id: 3,
        description: "Utility Bill",
        amount: -100
    },
    {
        id: 4,
        description: "online shopping",
        amount: -150
    }
]

//calculate total balance
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Balance total: ', totalBalance)

// 2. find the largest transaction (income or expense)

const largestTransaction = transactions.reduce((max, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(max.amount) ? transaction : max
}, transactions[0])
console.log('Largest transaction: ', largestTransaction);

//3. Filter purchased transactions

const purchasedTransactions = transactions.filter(transactions => transactions.amount < 0)
console.log('Purchased transactions: ', purchasedTransactions);

// 4. fin a transaction by description

const findTransactionByDescription = (transactions.find(transaction => transaction.description === 'Grocery shopping')) 
console.log('Transaction by description: ', findTransactionByDescription)

// 5. fin the index of a transaction by Amount

const indexTransactionByAmount = transactions.findIndex(transaction => transaction.amount === -100)
console.log('Index of transaction by amount: ', indexTransactionByAmount)

// 6. Update transaction Description

transactions.forEach(transaction => {
    if(transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})
console.log('Updated transactions: ', transactions)