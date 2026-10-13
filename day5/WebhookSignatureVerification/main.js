import crypto from "node:crypto"

function verifyWebhook(payload, signature, secret) {
    const expectedSignature = crypto.createHmac("sha-256", secret)
        .update(payload)
        .digest("hex");

    if (expectedSignature.length !== signature.length) {
        return false;
    }

    const isValid = crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(signature)
    );

    if (isValid) {
        return {
            valid: true,
            message: "Webhook verified"
        }
    }

    return {
        valid: false,
        message: "Invalid webhook signature"
    }
}