const jobs = [
    { id: 1, status: "pending" },
    { id: 2, status: "failed" },
    { id: 3, status: "completed" },
    { id: 4, status: "pending" },
    { id: 5, status: "failed" }
];

function processJobs(jobs, limit) {
    const result = [];
    let proccessedCount = 0;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === "pending" &&
            proccessedCount < limit) {
                jobs[i].status = "processing"
                result.push(jobs[i]);
                proccessedCount++;
        }
    }
    console.log(jobs)
    return result;
}

console.log(processJobs(jobs, 2));