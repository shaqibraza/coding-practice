const cache = {};


function getCached(cache, key, currentTime) {
    if (!cache[key]) {
        return null
    }
    if (currentTime >= cache[key].expiresAt) {
        delete cache[key];
        return null;
    }

    return cache[key].name;
}
function setCached(cache, key, value, ttl, currentTime) {
    if (!cache[key]) {
        cache[key] = { name: value, expiresAt:  currentTime + ttl};
    }
}

setCached(cache, "user:101", "Shaqib", 5000, 10000);

console.log(getCached(cache, "user:101", 12000));