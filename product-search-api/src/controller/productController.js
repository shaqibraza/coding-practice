const products = [
    { id: 1, name: "iPhone 15", category: "mobile", price: 69999 },
    { id: 2, name: "iPhone 14", category: "mobile", price: 59999 },
    { id: 3, name: "Samsung Galaxy S24", category: "mobile", price: 74999 },
    { id: 4, name: "OnePlus 12", category: "mobile", price: 54999 },
    { id: 5, name: "MacBook Air M3", category: "laptop", price: 99999 },
    { id: 6, name: "Dell Inspiron", category: "laptop", price: 64999 }
];

export const searchProducts = async (req, res) => {
    try {
        const { q, minPrice, maxPrice } = req.query;

        const min = Number(minPrice);
        const max = Number(maxPrice);

        const data = [];

        // Validate minPrice
        if (minPrice !== undefined && (Number.isNaN(min) || min < 0)) {
            return res.status(400).json({
                success: false,
                message: "Invalid minPrice"
            });
        }

        // Validate maxPrice
        if (maxPrice !== undefined && (Number.isNaN(max) || max < 0)) {
            return res.status(400).json({
                success: false,
                message: "Invalid maxPrice"
            });
        }

        // Validate price range
        if (
            minPrice !== undefined &&
            maxPrice !== undefined &&
            min > max
        ) {
            return res.status(400).json({
                success: false,
                message: "minPrice cannot be greater than maxPrice"
            });
        }

        for (let i = 0; i < products.length; i++) {
            if (
                (minPrice === undefined || products[i].price >= min) &&
                (maxPrice === undefined || products[i].price <= max) &&
                (!q || products[i].name.toLowerCase().includes(q.toLowerCase()))
            ) {
                data.push(products[i]);
            }
        }

        return res.status(200).json({
            count: data.length,
            products: data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};