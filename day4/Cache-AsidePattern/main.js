// Cache-Aside / Lazy Loading

const cache = {};

const users = [
    { id: 1, name: "Shaqib", email: "sha@x.com" },
    { id: 2, name: "Rahul", email: "rahul@x.com" },
    { id: 3, name: "Aman", email: "aman@x.com" }
];


function getUser(userId, cache, users) {
    if (cache[`user:${userId}`]) {
        console.log("Cache HIT");
        return cache[`user:${userId}`];
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            cache[`user:${userId}`] = users[i];
            console.log("Cache MISS");
            console.log(cache);
            return cache[`user:${userId}`];
        }
    }

    return null;
}
console.log(getUser(2, cache, users));
console.log(getUser(2, cache, users));
console.log(getUser(3, cache, users));
console.log(getUser(3, cache, users));
console.log(getUser(5, cache, users));
