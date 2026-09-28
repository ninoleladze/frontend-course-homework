// let numbers = [5, 25, 78, 34, 9];
// console.log(numbers);

// let colors = ["white", "black", "yellow", "red"];
// console.log(colors);

// let mix = [67, "Mango", 8, 90, "yellow", "black"];
// console.log(mix);

// // console.log(mix.length);
// for (let i = 0; i < mix.length; i++) {
//   console.log(mix[i]); //67 //Mango //8 //90 //yellow //black
// }

// push() //ამატებს ელემენტს ბოლოში
// pop() //შლის ბოლო ელემენტს
// unshift() //ამატებს ელემენტს დასაწყისში
// shift() // შლის პირველ ელემენტს

// let cars = ["Toyota", "Lexus", "BMW"];
// console.log(cars);

// cars.push("Mercedes");
// console.log(cars);

// cars.pop();
// console.log(cars);

// cars.unshift("Porsche");
// console.log(cars);

// cars.shift();
// console.log(cars);

// cars[2] = "Porsche";
// console.log(cars);

// let array = [];

// array.push("Keti");
// console.log(array);

//შექმენით ცარიელი მასივი და შეავსეთ ეს მასივი 15 ცალი რენდომული რიცხვით (min : 100; max : 300);
//შემდეგ დაბეჭდეთ ამ მასივიდან 3ის ჯერადი რიცხვები.

// let numbers = [];

// for (let i = 0; i < 15; i++) {
//   let min = 100;
//   let max = 300;
//   let randNum = Math.round(Math.random() * (max - min) + min);
//   numbers.push(randNum);
// }
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     console.log(numbers[i]);
//   }
// }

// let animal = "cat";
// console.log(animal.split(""));

// let cars = ["Toyota", "Lexus", "BMW"];

// console.log(cars.indexOf("Lexus")); //1
// console.log(cars.indexOf("Mercedes")); //-1

// console.log(cars.includes("BMW")); //true
// console.log(cars.includes("Mercedes")); //false

// console.log(cars.reverse());

// console.log(cars.join(" "));

//შეინახეთ თქვენი სახელი ცვლადში მაგ: keti, შემდეგ გააცალკევეთ, დაარივერსეთ და დალოგეთ ამოტრიალებული
//სახელი მაგ: itek
