// Task 4 — Order Sales Summary

const orders = [
    { id: 1, customer: "A", category: "electronics", amount: 5000, status: "completed" },
    { id: 2, customer: "B", category: "furniture", amount: 3000, status: "completed" },
    { id: 3, customer: "C", category: "electronics", amount: 7000, status: "pending" },
    { id: 4, customer: "D", category: "furniture", amount: 4000, status: "completed" },
    { id: 5, customer: "E", category: "electronics", amount: 2000, status: "completed" },
    { id: 6, customer: "F", category: "furniture", amount: 6000, status: "cancelled" }
];

function getSalesSummary(orders) {
    const result = {};
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status === "completed") {

            const category = orders[i].category

            if (!result[category]) {
                result[category] = {
                    count: 0,
                    totalAmount: 0
                };
            }
            result[category].count++;
            result[category].totalAmount += orders[i].amount;
        }
    }

    return result;
}

console.log(getSalesSummary(orders)) 