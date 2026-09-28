
let productPrices = [200, 150, 50, 45, 90, 235, 450];
let filteredPrices = productPrices.filter(price => price > 100);

let totalPrice = filteredPrices.reduce((sum, price) => sum + price, 0);

console.log("100 larze meti", filteredPrices);
console.log("jami", totalPrice);

let discountedPrices = filteredPrices.map(price => price * 0.8);

console.log("20% fasdakleba", discountedPrices);
