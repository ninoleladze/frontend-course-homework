// let numList = [15,20,17, 32, 52, 14]


// მომხმარებელს შემოაყვანინეთ ინდექსის ნომერი და შემდეგ რიცხვი
// და შესაბამის ინდექსის ადგილას დაემატოს ეს სასურველი რიცხვი



// let num1 = +prompt("შეიყვანეთ ინდექსი")
// let num2 = prompt("შემოიყვანე რიცხვი")

// numList.splice(num1, 0, num2)

// console.log(numList);












// console.log(numList[numList.length - 1]);

// numList.splice(3, 0, 300)





// for(let i = 0; i <= 10; i++) {
// console.log(i);
// }



// let numList = [15,20,17, 32, 52, 14]

// let meoreList = []
// // მეორე მასივში დაპუშეთ მხოლოდ კენტი რიცხვები


// for(let i = 0; i < numList.length; i++)  {
//     if(numList[i] % 2 == 1) {
//         meoreList.push(numList[i])
//     }
// }
// console.log(meoreList);



let text = "       merCedES      "


// console.log(text.trim().toLowerCase());


let title = "Acer Chromebook Spin 513 Convertible Laptop"

let search = prompt("დასერჩეეე")



// console.log( title.toLowerCase().includes(search.toLowerCase().trim())  );
console.log( title.toLowerCase().startsWith(search.toLowerCase().trim())  );



let products = ["Samsung S23", "Iphone 16", "Samsung Note 9", "Xiaomi Mi12", "Iphone 13"]


მომხმარებელს სთხოვეთ დასერჩოს და დალოგეთ ის წევრები, რომლებიც იწყება 
დასერჩილი ასოებით, თუ ვერაფერი მოიძებნა, ალერტად გამოჩნდეს "ვერ მოიძებნა"