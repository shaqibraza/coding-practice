// Task  — Search + Filtering

const products = [
    { id: 1, name: "iPhone 15", category: "electronics", price: 70000, stock: 5 },
    { id: 2, name: "Samsung TV", category: "electronics", price: 50000, stock: 0 },
    { id: 3, name: "Office Chair", category: "furniture", price: 8000, stock: 12 },
    { id: 4, name: "MacBook Air", category: "electronics", price: 90000, stock: 3 },
    { id: 5, name: "Study Table", category: "furniture", price: 12000, stock: 0 },
    { id: 6, name: "iPhone 14", category: "electronics", price: 60000, stock: 8 }
];

function searchProducts(products, options) {
    const { search, category, maxPrice, inStockOnly, page, limit } = options
    const data = [];

    let start = (page - 1) * limit;
    let end = page * limit;

    for (let i = 0; i < products.length; i++) {
        if ((!category || products[i].category === category) &&
            (maxPrice === undefined || products[i].price <= maxPrice) &&
            (!inStockOnly || products[i].stock > 0) &&
            (!search || products[i].name.toLowerCase().includes(search.toLowerCase()))
        ) {
            data.push(products[i]);
        }
    }

    const paginatedData  = data.slice(start, end);
    const totalPages = Math.ceil(data.length / limit);
    
    return {
        data: paginatedData,
        page,
        limit,
        total: data.length,
        totalPages,
    };
}

console.log(searchProducts(products, {
    search: "iphone",
    category: "electronics",
    maxPrice: 65000,
    inStockOnly: true,
    page: 1,
    limit: 2,
}));