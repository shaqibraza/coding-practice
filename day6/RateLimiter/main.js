const requestLog = {
    101: [940, 970, 1000],
    102: [980]
};

function isRateLimited(requestLog, userId, currentTime) {
    if (!(userId in requestLog)) {
        requestLog[userId] = [currentTime];

        return {
            allowed: true,
            message: "Request allowed"
        }
    }

    const timestamps = [...requestLog[userId]];

    timestamps.push(currentTime);

    while(timestamps.length > 0 && currentTime - timestamps[0] > 60){
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


console.log(isRateLimited(requestLog, 101, 1010));