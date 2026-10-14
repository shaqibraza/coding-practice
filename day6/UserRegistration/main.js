const user = {
    name: "Shaqib",
    email: "sha@example.com",
    age: 24
};

function validateUser(user) {
    if (!user.name) {
        return {
            valid: false,
            reason: "user name not found!"
        }
    }
    if (!user.email) {
        return {
            valid: false,
            reason: "user email not found"
        }
    }
    if (user.age < 18) {
        return {
            valid: false,
            reason: "user age must be at least 18"
        }
    }

    return {
        valid: true
    }
}

console.log(validateUser(user))