// // Task 1: Random numbers and divisible by 5
// let num1 = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
// let num2 = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
// console.log("Random Number 1:", num1);
// console.log("Random Number 2:", num2);
// console.log("5 ze iyofa unashtod:");
// for (let i = num1; i <= num2; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }


// // Task 2: Random RGB colors
// let colorsList = [];
// for (let i = 0; i < 10; i++) {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   colorsList.push(rgb `${red},${green},${blue}`);
// }
// console.log("Random RGB Colors:", colorsList);

// Task 3: Numbers between two random numbers
let smallNum = Math.floor(Math.random() * 101);
let bigNum = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
let betweenNumbers = [];
for (let i = Math.min(smallNum, bigNum); i <= Math.max(smallNum, bigNum); i++) {
  betweenNumbers.push(i);
}
console.log("Small Random Number:", smallNum);
console.log("Big Random Number:", bigNum);
console.log("Numbers between:", betweenNumbers);

// Task 4: Odd numbers between 100 and 300
// let oddNums = [];
// for (let i = 100; i <= 300; i++) {
//   if (i % 2 !== 0) {
//     oddNums.push(i);
//   }
// }
// console.log("Odd Numbers 100 to 300:", oddNums);

// // Task 5: User input and multiples of 3
// let userNum = prompt("Enter a number between 10 and 100:");
// if (userNum !== null && !isNaN(userNum)) {
//   userNum = parseInt(userNum);
//   if (userNum >= 10 && userNum <= 100) {
//     let randomNum = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
//     let multiplesOf3 = [];
//     for (let i = userNum; i <= randomNum; i++) {
//       if (i % 3 === 0) {
//         multiplesOf3.push(i);
//       }
//     }
//     console.log("User Number:", userNum);
//     console.log("Random Number:", randomNum);
//     console.log("Multiples of 3:", multiplesOf3);
//   } else {
//     console.log("Invalid input! Please enter a number between 10 and 100.");
//   }
// } else {
//   console.log("No input provided.");
// }