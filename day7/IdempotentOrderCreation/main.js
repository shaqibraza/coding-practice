const requests = [
    { idempotencyKey: "abc123", userId: 1, amount: 500 },
    { idempotencyKey: "xyz789", userId: 2, amount: 800 },
    { idempotencyKey: "abc123", userId: 1, amount: 500 },
    { idempotencyKey: "pqr456", userId: 3, amount: 300 },
    { idempotencyKey: "xyz789", userId: 2, amount: 800 }
];

function processOrders(requests) {
    const map = new Map();

    for(let request of requests){
        if (!map.has(request.idempotencyKey)) {
            map.set(request.idempotencyKey, {
                idempotencyKey: request.idempotencyKey,
                userId: request.userId,
                amount: request.amount
            });
        }
    }

    return [...map.values()];
}

console.log(processOrders(requests));   

// [
//     { idempotencyKey: "abc123", userId: 1, amount: 500 },
//     { idempotencyKey: "xyz789", userId: 2, amount: 800 },
//     { idempotencyKey: "pqr456", userId: 3, amount: 300 }
// ]