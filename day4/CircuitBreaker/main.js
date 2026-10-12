// Task 29 — Circuit Breaker

const circuit = {
    failures: 0,
    state: "CLOSED"
};

function callService(circuit, serviceCall) {
    try {
        if (circuit.state === "OPEN") {
            return {
                success: false,
                message: "Service unavailable"
            }
        }
        const data = serviceCall();
        return {
            success: true,
            data: data
        }
    } catch (error) {
        circuit.failures++;
        if (circuit.failures >= 3) {
            circuit.state = "OPEN"

            return {
                success: false,
                message: "Circuit breaker is OPEN"
            }
        }
        return {
            success: false,
            message: "Service unavailable"
        }
    }
}

function successfulService() {
    return { message: "Payment successful" };
}

function failingService() {
    throw new Error("Payment service failed");
}

console.log(callService(circuit, failingService));
console.log(callService(circuit, failingService));
console.log(callService(circuit, failingService));
console.log(callService(circuit, failingService));