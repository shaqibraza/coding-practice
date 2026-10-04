const jobs = [
    { id: 1, status: "failed", attempts: 1 },
    { id: 2, status: "completed", attempts: 2 },
    { id: 3, status: "failed", attempts: 3 },
    { id: 4, status: "failed", attempts: 0 }
];

function retryFailedJobs(jobs, maxRetries){
    for(let i = 0; i < jobs.length; i++){
        if (jobs[i].status === "failed" && 
            jobs[i].attempts < maxRetries) {
            jobs[i].status = "pending";
            jobs[i].attempts = jobs[i].attempts + 1;
        }
    }

    return jobs;
}

console.log(retryFailedJobs(jobs, 3));