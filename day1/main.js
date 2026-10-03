function getEvenNumbers(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            result.push(nums[i]);
        }
    }
    // console.log(result)
}

getEvenNumbers([1, 2, 3, 4, 5, 6])

// Ek function getNames banao jo objects ki array receive kare aur sirf un users ke names return kare jinki age 18 se greater ya equal hai.
function getName(arr) {
    const ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 18) {
            ans.push(arr[i].name);
        }
    }
    // console.log(ans);
}

getName([
    { name: "Rahul", age: 21 },
    { name: "Aman", age: 16 },
    { name: "Sara", age: 19 }
])


// const users = [
//     { name: "Rahul", active: true },
//     { name: "Aman", active: false },
//     { name: "Sara", active: true },
//     { name: "Vikas", active: false }
// ];

function getActiveUsers(users) {
    const output = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].active) {
            output.push(users[i]);
        }
    }
    return output;
}

// console.log(getActiveUsers(users))

// [
//     { name: "Rahul", active: true },
//     { name: "Sara", active: true }
// ]

// const products = [
//     { name: "Laptop", price: 70000, inStock: true },
//     { name: "Mouse", price: 1200, inStock: false },
//     { name: "Keyboard", price: 2500, inStock: true },
//     { name: "Monitor", price: 15000, inStock: true }
// ];

// Product inStock hona chahiye.
// Price ₹5000 se kam hona chahiye.
// Matching products ka name return karo.

function getAvailableProducts(products) {
    const result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].inStock && products[i].price < 5000) {
            result.push(products[i].name);
        }
    }

    return result;
}

// console.log(getAvailableProducts(products))


// API se users fetch karo aur un users ke names return karo jinki id 5 se greater hai.

// https://jsonplaceholder.typicode.com/users

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        const result = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id > 5) {
                result.push(data[i].name);
            }
        }
        return result;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
}

// const response = await fetchData();
// console.log(response);


// Sirf un users ko select karo jo:
// 1. active === true
// 2. age >= 18
// const users = [
//     { id: 1, name: "Rahul", age: 22, active: true },
//     { id: 2, name: "Aman", age: 17, active: true },
//     { id: 3, name: "Sara", age: 25, active: false },
//     { id: 4, name: "Vikas", age: 20, active: true },
//     { id: 5, name: "Neha", age: 16, active: false }
// ];

function getActiveAdults(users) {
    const result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].active && users[i].age >= 18) {
            result.push({ name: users[i].name, age: users[i].age });
        }
    }

    return result;
}

// console.log(getActiveAdults(users))



// const orders = [
//     { id: 201, customer: "Arjun", amount: 1200, status: "completed" },
//     { id: 202, customer: "Priya", amount: 2800, status: "pending" },
//     { id: 203, customer: "Rohan", amount: 3500, status: "completed" },
//     { id: 204, customer: "Anjali", amount: 900, status: "cancelled" },
//     { id: 205, customer: "Kabir", amount: 2200, status: "completed" },
//     { id: 206, customer: "Meera", amount: 1800, status: "completed" }
// ];

// Sirf completed orders select karo.
// Total amount ₹5000 se zyada hona chahiye.
// Output mein customer name + amount return karo.
function getCompletedOrders(orders) {
    const result = [];
    let totalAmount = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status === "completed") {
            totalAmount = totalAmount + orders[i].amount;

            result.push({
                customer: orders[i].customer,
                amount: orders[i].amount
            })
        }
    }
    return {
        orders: result,
        totalAmount,
    }
}

// console.log(getCompletedOrders(orders));


const products = [
    { id: 1, name: "Laptop", price: 70000, category: "electronics", stock: 5 },
    { id: 2, name: "Mouse", price: 1200, category: "electronics", stock: 20 },
    { id: 3, name: "Chair", price: 4500, category: "furniture", stock: 0 },
    { id: 4, name: "Keyboard", price: 3000, category: "electronics", stock: 8 },
    { id: 5, name: "Desk", price: 8000, category: "furniture", stock: 3 },
    { id: 6, name: "Headphones", price: 2500, category: "electronics", stock: 0 }
];

// Sirf electronics category ke products select karne hain.

// Product stock mein available hona chahiye (stock > 0).

// Sirf woh products select karo jinka price ₹5000 se kam hai.

// Har selected product ke liye sirf:
// - name
// - price
// - stock
// return karna hai.

// Saath mein selected products ki total stock quantity bhi calculate karni hai.
function getAvailableElectronics(products) {
    const result = [];
    let totalStock = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === "electronics" && products[i].stock > 0 && products[i].price < 5000) {
            totalStock += products[i].stock

            result.push({
                name: products[i].name,
                price: products[i].price,
                stock: products[i].stock
            });
        }
    }

    return {
        products: result,
        totalStock,
    }
}

// console.log(getAvailableElectronics(products));


// const users = [
//     {
//         id: 1,
//         name: "Rahul",
//         email: "rahul@gmail.com",
//         role: "user",
//         isActive: true
//     },
//     {
//         id: 2,
//         name: "Aman",
//         email: "aman@gmail.com",
//         role: "admin",
//         isActive: true
//     },
//     {
//         id: 3,
//         name: "Sara",
//         email: "sara@gmail.com",
//         role: "user",
//         isActive: false
//     },
//     {
//         id: 4,
//         name: "Vikas",
//         email: "vikas@gmail.com",
//         role: "user",
//         isActive: true
//     },
//     {
//         id: 5,
//         name: "Neha",
//         email: "neha@gmail.com",
//         role: "admin",
//         isActive: false
//     }
// ];

function getActiveUsers(users) {
    const result = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive === true && users[i].role !== "admin") {
            result.push({
                id: users[i].id,
                name: users[i].name,
                email: users[i].email
            })
        }
    }

    return {
        users: result,
        count: result.length
    };
}

// console.log(getActiveUsers(users));


// const users = [
//     {
//         email: "rahul@gmail.com",
//         age: 22
//     },
//     {
//         email: "aman@gmail.com",
//         age: 17
//     },
//     {
//         email: "sara@gmail.com",
//         age: 25
//     }
// ];


function registerUsers(users) {
    const accepted = [];
    const rejected = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email && users[i].age >= 18) {
            accepted.push(users[i]);
        } else if (!users[i].email) {
            rejected.push({
                reason: "Email does not exist"
            })
        } else {
            rejected.push({
                email: users[i].email,
                reason: "User must be at least 18 years old"
            })
        }
    }

    return {
        accepted,
        rejected
    }
}

// console.log(registerUsers(users));


const request = {
    user: {
        id: 101,
        role: "user",
        isActive: true
    },
    resource: {
        ownerId: 101,
        isPublic: false
    }
};

function canAccessResource(request) {
    if (!request.user.isActive) {
        return {
            allowed: false,
            reason: "User is inactive"
        }
    } else if (request.user.id === request.resource.ownerId
    ) {
        return {
            allowed: true,
            reason: "User is Owner"
        }
    } else if (request.user.role === "admin"
    ) {
        return {
            allowed: true,
            reason: "User is Admin"
        }
    } else if (request.resource.isPublic) {
        return {
            allowed: true,
            reason: "Reasource is public"
        }
    }

    else {
        return {
            allowed: false,
            reason: "..."
        }
    }
}

// console.log(canAccessResource(request));


const orders = [
    {
        id: 101,
        userId: 1,
        amount: 1200,
        status: "completed"
    },
    {
        id: 102,
        userId: 2,
        amount: 3000,
        status: "pending"
    },
    {
        id: 103,
        userId: 1,
        amount: 2500,
        status: "completed"
    },
    {
        id: 104,
        userId: 1,
        amount: 800,
        status: "cancelled"
    },
    {
        id: 105,
        userId: 2,
        amount: 4500,
        status: "completed"
    }
];

function getUserOrderSummary(orders, userId) {
    const totalOrders = [];
    let totalAmount = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].userId === userId && orders[i].status === "completed") {
            totalOrders.push(orders[i]);
            totalAmount += orders[i].amount
        }
    }

    return {
        orders: totalOrders,
        totalAmount,
        count: totalOrders.length
    };
}

// console.log(getUserOrderSummary(orders, 1));


const users = [
    { id: 1, name: "Rahul", isActive: true },
    { id: 2, name: "Aman", isActive: false },
    { id: 3, name: "Sara", isActive: true }
];

function getUserById(users, userId) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId && users[i].isActive !== true) {
            return {
                success: false,
                statusCode: 403,
                message: "User is inactive"
            }
        }
        if (users[i].id === userId && users[i].isActive === true) {
            return {
                success: true,
                statusCode: 200,
                data: {
                    id: users[i].id,
                    name: users[i].name
                }
            }
        }
    }

    return {
        success: false,
        statusCode: 404,
        message: "User not found"
    }
}

// console.log(getUserById(users, 2));


const requests = [
    { userId: 101, timestamp: 1000 },
    { userId: 101, timestamp: 1020 },
    { userId: 101, timestamp: 1040 },
    { userId: 101, timestamp: 1050 },
    { userId: 102, timestamp: 1060 },
    { userId: 101, timestamp: 1070 }
];

function isRateLimited(requests, userId, currentTime) {
    let count = 0;
    for (let i = 0; i < requests.length; i++) {
        if (requests[i].userId === userId) {

            const requestAge = currentTime - requests[i].timestamp;

            if (requestAge <= 60) {
                count++;
            }
        }
    }
    if (count >= 3) {
        return true;
    }
    return false;
}

// console.log(isRateLimited(requests, 101, 1000))


const requestLog = {
    101: [940, 970, 1000],
    102: [980]
};

function recordRequest(requestLog, userId, currentTime) {
    if (!(userId in requestLog)) {
        requestLog[userId] = [currentTime];

        return {
            allowed: true,
            message: "Request allowed"
        }
    }
    const timestamps = requestLog[userId];
    timestamps.push(currentTime);
    while (timestamps.length > 0 &&
        currentTime - timestamps[0] > 60) {
        timestamps.shift();
    }
    if (timestamps.length >= 3) {
        return {
            allowed: false,
            message: "Rate limit exceeded"
        }
    }
    return {
        allowed: true,
        message: "Request allowed"
    };
}

console.log(recordRequest(requestLog, 101, 1020))    