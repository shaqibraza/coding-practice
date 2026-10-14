const products = [
    { id: 1, name: "Keyboard", category: "electronics", price: 2000, stock: 5 },
    { id: 2, name: "Mouse", category: "electronics", price: 800, stock: 0 },
    { id: 3, name: "T-Shirt", category: "clothing", price: 1200, stock: 10 },
    { id: 4, name: "Monitor", category: "electronics", price: 12000, stock: 3 }
];

function searchProducts(products, options) {

    const { search, category, maxPrice, inStockOnly } = options

    const result = [];

    for(let i = 0; i < products.length; i++){
        if ((!category || category === products[i].category) && 
            (maxPrice === undefined || products[i].price <= maxPrice) &&
            (!inStockOnly || products[i].stock > 0) &&
            (!search || products[i].name.toLowerCase().includes(search.toLowerCase()))
        ) {
            result.push(products[i]);
        }
    }

    return result;
}

console.log(searchProducts(products, {
    category: "electronics",
    maxPrice: 5000,
    inStockOnly: true
}));