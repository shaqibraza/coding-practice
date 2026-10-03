const inventory = [
    { productId: 101, name: "Laptop", stock: 5 },
    { productId: 102, name: "Mouse", stock: 10 },
    { productId: 103, name: "Keyboard", stock: 3 }
];

const cart = [
    { productId: 101, quantity: 2 },
    { productId: 102, quantity: 4 },
];

function reserveInventory(inventory, cart) {
    for (let i = 0; i < cart.length; i++) {
        let productFound = false;
        for (let j = 0; j < inventory.length; j++) {
            if (cart[i].productId === inventory[j].productId) {
                productFound = true;
                if (cart[i].quantity > inventory[j].stock) {
                    return {
                        success: false,
                        message: `Insufficient stock for ${inventory[j].name}`
                    }
                }
            }
        }
        if (!productFound) {
            return {
                success: false,
                message: "Product not found"
            };
        }
    }
    
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < inventory.length; j++) {
            if (cart[i].productId === inventory[j].productId) {
                if (inventory[j].stock >= cart[i].quantity) {
                    inventory[j].stock = inventory[j].stock - cart[i].quantity
                }
            }
        }
    }
    console.log(inventory)
    return {
        success: true,
        message: "Inventory reserved successfully"
    }
}

console.log(reserveInventory(inventory, cart))