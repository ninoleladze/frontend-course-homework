// let userText = prompt("saxeli?")
// let userLastName = prompt("gvari?")
// let age = prompt ("asaki?")

// if (age >= 18) {
//     console.log("შენ ზრდასრული ხარ!")
    
// } else {
//     console.log(" შენ ჯერ ძალიან ახალგაზრდა ხარ!");
// }

// function misalmeba(saxeli, gvari , asaki) {
//         console.log(`gamarjoba ${saxeli} ${gvari} ${asaki}`);
//     }
    
   
//     misalmeba(userText, userLastName, age)


// /**
//  * JavaScript Arrays - სრულყოფილი სახელმძღვანელო
//  * 
//  * მასივი (Array) არის მონაცემთა სტრუქტურა, რომელიც ინახავს ელემენტების კოლექციას ინდექსირებული წესით.
//  * მასივის ელემენტებზე წვდომა ხდება მათი ინდექსის საშუალებით, რომელიც იწყება 0-დან.
//  */

// // 1. მასივის შექმნა (Array Creation)
// let emptyArray = []; // ცარიელი მასივი
// let numbers = [1, 2, 3, 4, 5]; // რიცხვების მასივი
// let mixedArray = ["Hello", 42, true, { name: "Inga" }]; // შერეული ტიპის მონაცემები

// // 2. მასივში ელემენტების დამატება (Adding Elements)
// numbers.push(6); // ამატებს ბოლოს
// numbers.unshift(0); // ამატებს დასაწყისში
// console.log(numbers); // [0, 1, 2, 3, 4, 5, 6]

// // 3. მასივიდან ელემენტების წაშლა (Removing Elements)
// numbers.pop(); // ბოლო ელემენტის წაშლა
// numbers.shift(); // პირველი ელემენტის წაშლა
// numbers.splice(1, 2); // მეორე და მესამე ელემენტის წაშლა
// console.log(numbers);

// // 4. მასივის მეთოდები (Array Methods)
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.join(", ")); // მასივის სტრინგად გარდაქმნა: "Apple, Banana, Cherry"
// console.log(fruits.includes("Banana")); // ამოწმებს არის თუ არა ელემენტი: true
// console.log(fruits.indexOf("Cherry")); // ინდექსის პოვნა: 2

// // 5. მასივზე ციკლის გამოყენება (Looping Through Arrays)
// fruits.forEach(fruit => console.log(fruit)); // თითოეული ელემენტზე მოქმედება

// // 6. while ციკლი (While Loop)
// // while ციკლი მუშაობს მანამ, სანამ პირობა true-ა
// let count = 0;
// while (count < 5) {
//     console.log("Iteration: ", count);
//     count++;
// }

// // 7. ლოგიკური ოპერატორები (!, &&, ||)
// // ! (NOT) - აბრუნებს პირობის საპირისპირო მნიშვნელობას
// let isTrue = true;
// console.log(!isTrue); // false

// // && (AND) - აბრუნებს true-ს, მხოლოდ თუ ორივე პირობა არის true
// console.log(true && true); // true
// console.log(true && false); // false

// // || (OR) - აბრუნებს true-ს, თუ ერთ-ერთი პირობა მაინც არის true
// console.log(true || false); // true
// console.log(false || false); // false

// // 8. map() მეთოდი (Array map Method)
// // map() ქმნის ახალ მასივს, რომელიც შეიცავს თითოეული ელემენტის მოდიფიცირებულ ვერსიას
// let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); // ყველა ელემენტი დიდ ასოებში
// console.log(upperCaseFruits);

// // 9. filter() მეთოდი (Array filter Method)
// // filter() აბრუნებს ახალ მასივს, რომელიც შეიცავს მხოლოდ იმ ელემენტებს, რომლებიც აკმაყოფილებენ მითითებულ პირობას
// let numbersArray = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbersArray.filter(num => num % 2 === 0); // მხოლოდ ლუწი რიცხვები
// console.log(evenNumbers);

// // 10. reduce() მეთოდი (Array reduce Method)
// // reduce() გამოიყენება მასივში ყველა ელემენტის შეჯამებისთვის ან ერთ კონკრეტულ მნიშვნელობად გარდასაქმნელად
// let sum = numbersArray.reduce((acc, num) => acc + num, 0); // ყველა რიცხვის ჯამი
// console.log(sum);

// // 11. უნიკალური შემთხვევითი რიცხვების მასივი (Generating Unique Random Numbers)
// let list = [];
// while(list.length < 10) {
//     let random = Math.round(Math.random() * 15);
//     if(!list.includes(random)) {
//         list.push(random);
//     }
// }
// console.log(list);

// // 12. ობიექტების მასივი (Array of Objects)
// let users = [
//     { name: "Inga", age: 25 },
//     { name: "Nino", age: 30 },
//     { name: "Tinatini", age: 22 }
// ];

// let filteredUsers = users.filter(user => user.age > 24);
// console.log(filteredUsers);

// // 13. მასივის კოპირება (Copying Arrays)
// let original = [1, 2, 3];
// let copy = [...original]; // Spread ოპერატორი
// let anotherCopy = original.slice();
// console.log(copy);

// // 14. მასივის დესტრუქტურიზაცია (Array Destructuring)
// let [first, second, third] = fruits;
// console.log(first, second, third);



// 8. დავალების შესრულება
let clothes = ["Shirt", "Jeans", "Jacket", "T-Shirt", "Sweater"];
clothes.push("Coat"); // ახალი ელემენტის დამატება
clothes.unshift("Hat"); // ახალი ელემენტის დამატება დასაწყისში
clothes.pop(); // ბოლო ელემენტის წაშლა

let upperCaseClothes = clothes.map(item => item.toUpperCase());
console.log(upperCaseClothes);

let filteredClothes = clothes.filter(item => item.includes("S"));
console.log(filteredClothes);

console.log(clothes.includes("Shirt")); // ამოწმებს არის თუ არა "Shirt"

let randomNumbers = [];
while(randomNumbers.length < 5) {
    let num = Math.floor(Math.random() * 50);
    if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
    }
}
console.log(randomNumbers);

if (clothes.includes("Shirt") && clothes.length > 3) {
    console.log("Shirt არის და მასივი საკმარისად დიდია");
} else {
    console.log("პირობა არ შესრულდა");
}

console.log(clothes); // საბოლოო მასივი







