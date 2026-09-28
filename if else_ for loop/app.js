//მომხმარებელს შემოვაყვანინოთ რიცხვი, გადავამოწმოთ ეს რიცხვია კენტია თუ ლუწია
//დავბეჟდოთ კონსოლში შესაბამისად

// const user = Number(prompt("enter the number"));
//პირველი ვარიანტი
// if (user % 2 === 0) {
//   console.log("ლუწია");
// } else {
//   console.log("კენტია");
// }

//მეორე ვარიანტი

// if (user % 2 !== 0) {
//   console.log("კენტია");
// } else {
//   console.log("ლუწია");
// }

//მესამე ვარიანტი

// if (user % 2 === 1) {
//   console.log("კენტია");
// } else {
//   console.log("ლუწია");
// }

//შემოვაყვანინოთ მომხმარებელს ორი რიცხვი(ჯერ ერთი, მერე მეორე).
//გადავამოწმოთ, თუ პირველი რიცხვი მეტია მეორეზე, დაილოგოს(პირველი რიცხვი მეტი მეორეზე)
//თუ ტოლია დაილოგოს ტოლია, სხვა შემთხვევაში დაილოგოს რომ პირველი რიცხვი ნაკლებია მეორე რიცხვზე

// const user1 = Number(prompt("enter the first number"));
// const user2 = Number(prompt("enter the second number"));

// if (user1 > user2) {
//   console.log(`${user1} მეტია ${user2}-ზე`);
// } else if (user1 === user2) {
//   console.log("ტოლია");
// } else {
//   console.log(`${user1} ნაკლებია ${user2}-ზე`);
// }

//
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// //
// let min = 100;
// let max = 500;
// const randNum = Math.round(Math.random() * (max - min) + min);

//მომხმარებელს შემოაყვანინეთ რიცხვი 10-დან 50-მდე. შემდეგ გადაამოწმეთ, თუ სწორად აქვს
//შემოყვანილი, მაშინ დაარენდომეთ რიცხვი 300დან 500მდე და დაბეჭდეთ ყველა ლუწი რიცხვი,
//რომელიც მოთავსებული იქნება მომხმარებლის მიერ შემოყვანილ რიცხვსა და რენდომულ რიცხვს შორის

// const user = Number(prompt("enter number between 10-50"));

// if (user >= 10 && user <= 50) {
//   let min = 300;
//   let max = 500;

//   let randNum = Math.round(Math.random() * (max - min) + min);
//   for (let i = user; i < randNum; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("enter number between 10-50");
// }

//დააგენერირეთ 10 ცალი რენდომული ფერი rgb ფორმატში,
// მაგალითად შემდეგი ფორმატის  rgb(123,43,11);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("rgb", randNum, randNum2, randNum3);
