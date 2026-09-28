let num1 = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
let num2 = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
console.log("Random Number 1:", num1);
console.log("Random Number 2:", num2);
console.log("5 ze iyofa unashtod:");
for (let i = num1; i <= num2; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}