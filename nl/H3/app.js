
let num1 = Math.floor(Math.random() * 101); 
let num2 = Math.floor(Math.random() * (500 - 100 + 1)) + 100; 

console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Numbers between:");


if (num1 > num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
}

for (let i = num1; i <= num2; i++) {
  console.log(i); 
}