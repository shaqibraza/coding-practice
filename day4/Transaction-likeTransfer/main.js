// Transaction-like Transfer

const accounts = [
    { id: 1, name: "Shaqib", balance: 5000 },
    { id: 2, name: "Rahul", balance: 3000 }
];



function transferMoney(accounts, fromId, toId, amount) {
    if (amount <= 0) {
        return {
            success: false,
            message: "Amount must be greater than zero!"
        }
    }

    let sender = null;
    let receiver  = null;

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].id === fromId) {
            sender = accounts[i];
        }
        if (accounts[i].id === toId) {
            receiver  = accounts[i];
        }
    }

    if (!sender) {
        return {
            success: false,
            message: "Sender not found"
        };
    }

    if (!receiver ) {
        return {
            success: false,
            message: "Receiver not found"
        };
    }

    if (fromId === toId) {
        return {
            success: false,
            message: "Cannot transfer to the same account"
        };
    }

    if (sender.balance >= amount) {
        receiver .balance += amount;

        sender.balance -= amount;
        console.log(accounts)
        return {
            success: true,
            message: "Transfer successful"
        }
    }

    return {
        success: false,
        message: "Insufficient balance!"
    }
}


console.log(transferMoney(accounts, 1, 2, 1500));