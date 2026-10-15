const activities = [
    { userId: 1, type: "login" },
    { userId: 1, type: "purchase" },
    { userId: 2, type: "login" },
    { userId: 1, type: "login" },
    { userId: 2, type: "logout" },
    { userId: 3, type: "login" },
    { userId: 2, type: "purchase" }
];

function getUserActivitySummary(activities) {
    const map = new Map();

    for (let activity of activities) {
        if (!map.has(activity.userId)) {
            map.set(activity.userId, {
                userId: activity.userId,
                loginCount: 0,
                purchaseCount: 0,
                logoutCount: 0
            });
        }

        const summary = map.get(activity.userId);

        if (activity.type === "login") {
            summary.loginCount++
        }
        if (activity.type === "purchase") {
            summary.purchaseCount++;
        }
        if (activity.type === "logout") {
            summary.logoutCount++;
        }
    }

    return [...map.values()];
};

console.log(getUserActivitySummary(activities))