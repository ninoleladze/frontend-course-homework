let myH1 = document.querySelector("h1")
let otherH1 = document.querySelector(".testH1")
let para = document.querySelector("#para")
let btn = document.querySelector("#btn")
let ageH1 = document.querySelector("#age")
// console.log(myH1);
// console.log(otherH1);
// console.log(para);



//! თეგიდან ტექსტის ამოღებისა და შეცვლის 3 გზა:
//? 1. innerHTML -- ამოიღებს და ცვლის ამ თეგში არსებულ html კოდს;
//? 2. innerText -- ამოიღებს და ცვლის ამ თეგში არსებული ტექსტს,
//?                  რომელიც საიტზე ჩანს და css-დან გათიშული არაა;
//? 3. TextContent -- ამოიღებს თეგის მთლიან ტექსტს



// otherH1.innerHTML = "I am Styding at STEP  <button>CLOSE</button> "



// function satesto() {
//     console.log("daiklikaaaaaaa");
    
// }


// btn.addEventListener("click", secondLogic)
// btn.removeEventListener("click", secondLogic)


// function secondLogic() {
//     console.log("test");
    
// }
// btn.addEventListener("click", function() {
//     console.log("gasagasgg");
    
// })


// შექმენით ღილაკი, რომლის დაკლიკვაზეც გამოჩნდება პრომპტის ფანჯარა და იკითხავთ ასაკს,
// თუ ასაკი 18 ან მეტია, მაშინ h1 ში ჩაიწეროს ტექსტი " სრულწლოვანია", სხვა შემთხვევაში
// "არასრულწლოვანია"


// console.log(ageH1);


// function ageChecker() {
//     let userAge = +prompt("შეიყვანე ასაკი")
//     if(userAge >= 18) {
//         ageH1.innerHTML = "სრულწლოვანია"
//     }
//     else {
//         ageH1.innerHTML = "არასრულწლოვანია"
//     }

// }


// შექმენით ღილაკი, რომლის დაკლიკვაზე გამოჩნდება პრომპტი და რა რიცხვსაც ჩაწერთ მაგ
// ღილაკის ტექსტი გახდეს ეგ რიცხვი

// let changeBtn = document.querySelector("#changeBtn")

// changeBtn.addEventListener("click", function() {
//     let userNum = prompt("შეიყვანე რიცხვი")
//     changeBtn.innerHTML = userNum
    
// })




// ------------------------------------------------------------

let allBtn = document.querySelectorAll(".myBtn")

allBtn.forEach( (gilaki, ind ) => {
    gilaki.addEventListener("click", function() {
       gilaki.innerHTML = ind
        
    })
})
