const orders = [];
let count = 1;

function createOrder(request, orders) {
    const map = new Map(orders.map(order => [order.idempotencyKey, order]));

    if (map.has(request.idempotencyKey)) {

        const existingOrder = map.get(request.idempotencyKey);

        console.log(`Order with idempotency key: ${request.idempotencyKey} already exists.`);
        
        return existingOrder;
    }
    request = {id: count, ...request}

    orders.push(request);
    count++;

    return request;
}


createOrder(
    { idempotencyKey: "abc123", userId: 101, amount: 499 },
    orders
);

createOrder(
    { idempotencyKey: "abc124", userId: 101, amount: 499 },
    orders
);

createOrder(
    { idempotencyKey: "abc125", userId: 101, amount: 499 },
    orders
);

createOrder(
    { idempotencyKey: "abc125", userId: 101, amount: 499 },
    orders
);

console.log(orders);