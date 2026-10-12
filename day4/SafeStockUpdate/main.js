// Safe Stock Update

const product = {
    id: 101,
    name: "Keyboard",
    stock: 5
};

function purchaseProduct(product, quantity){
    if (quantity < 1) {
        return `Quantity must be greater then 0 and must be less then available stocks!`
    }
    if (product.stock <= 0 || quantity > product.stock) {
        return {
            success: false,
            message: "Insufficient stock"
        };
    };

    product.stock = product.stock - quantity;

    return {
        success: true,
        remainingStock: product.stock
    }
}

console.log(purchaseProduct(product, 2));