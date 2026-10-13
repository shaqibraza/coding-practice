async function requestWithRetry(url, options, maxRetries) {
    const retryableStatuses = new Set([429, 500, 502, 503, 504]);

    for (let retry = 0; retry <= maxRetries; retry++) {
        try {
            const res = await fetch(url, options);

            const response = await res.json();

            if (res.ok) {
                return {
                    success: true,
                    data: response.data,
                }
            };

            if (!retryableStatuses.has(res.status)) {
                return {
                    success: false,
                    status: res.status,
                    message: response.message || "Request failed"
                };
            };

            if (retry === maxRetries) {
                return {
                    success: false,
                    status: res.status,
                    message: "Service failed after retries"
                };
            };

            let delay = 500 * (2 ** retry);

            await new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
        } catch (error) {
            if (retry === maxRetries) {
                return {
                    success: false,
                    message: "Network request failed after retries"
                };
            };

            let delay = 500 * (2 ** retry);

            await new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
        }
    }
};


const result = await requestWithRetry(
    "https://api.example.com/payments",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            orderId: "ORD123",
            amount: 5000
        })
    },
    3
);