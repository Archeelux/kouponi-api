const Product = require("../models/product");

function start() {
    const intervalTime = 1000;
    setInterval(() => {
        scrapeData();
    }, intervalTime);
}

async function scrapeData() {
    const product = new Product({
        name: "test",
        price: 20,
        priceText: "20"
    });

    await product.save();
}

module.exports = start;
