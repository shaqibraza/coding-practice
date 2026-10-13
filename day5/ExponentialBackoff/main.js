async function retryWithBackoff(serviceCall, maxRetries, baseDelay) {
    for (let retry = 0; retry <= maxRetries; retry++) {
        try {
            const data = serviceCall();

            return {
                success: true,
                data: data,
            }
        } catch (error) {
            if (retry === maxRetries) {
                return {
                    success: false,
                    message: "Service failed after retries"
                }
            }

            let delay = baseDelay * (2 ** retry);

            await new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
        }
    }
}



let attempts = 0;

function unstableService() {
    attempts++;

    if (attempts < 3) {
        throw new Error("Temporary failure");
    }

    return {
        message: "Payment successful"
    };
}


retryWithBackoff(unstableService, 3, 1000)
    .then(result => console.log(result));