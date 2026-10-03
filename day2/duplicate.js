const users = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Aman", email: "aman@gmail.com" },
    { id: 3, name: "Priya", email: "priya@gmail.com" },
    { id: 4, name: "Rahul 2", email: "rahul@gmail.com" },
    { id: 5, name: "Aman 2", email: "aman@gmail.com" }
];

function findDuplicateEmails(users) {
    const seen = new Set();
    const duplicates = new Set();

    for(let i = 0; i < users.length; i++){
        const email = users[i].email.toLowerCase();
        if (seen.has(email)) {
            duplicates.add(email);
        }else{
            seen.add(email)
        }
    }

    return [...duplicates];
}

console.log(findDuplicateEmails(users));