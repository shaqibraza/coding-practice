// Task  — Pagination
const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
    { id: 8, name: "H" },
    { id: 9, name: "I" },
    { id: 10, name: "J" }
];

function paginateUsers(users, page, limit) {
    let start = (page - 1) * limit;
    let end = page * limit;

    const data = users.slice(start, end);

    const totalPages = Math.ceil(users.length / limit);
    return {
        data,
        page,
        limit,
        total: users.length,
        totalPages,
    }
}

console.log(paginateUsers(users, 2, 3))
console.log(paginateUsers(users, 4, 3))
console.log(paginateUsers(users, 5, 3))