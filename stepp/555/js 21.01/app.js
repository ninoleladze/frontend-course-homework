
// let list = []
// let otherList = []


// function rameLogic(array, raodenoba) {
//     for(let i = 0; i < raodenoba; i++) {
//         array.push(i)
//     }

  
// }


// rameLogic(list, 10)
// rameLogic(otherList, 30)


// console.log(list, otherList);



// function test() {
//     let firstName = "irakli"
//     let lastName = "Adamashvili"

//     return firstName + lastName
// }

// console.log(  test() );



// ისრიანი ფუნქცია --- arrow function

// let fullName = (saxeli, gvari) => saxeli + gvari

// console.log(fullName("ana", "minasiani"));

// let test =  x => x / 2


// console.log(  test(20)  );


// let list = ["irakli", "giga", "nini", "nikolozi", "luka"]


// // for(let i = 0; i < list.length; i++) {
// //     console.log(list[i]);
// // }

// list.forEach( (adamiani, wevri) => console.log(5))

// let numList = [50, 12, 11, 7, 30, 5]
// let meoreList = []

// პირველ მასივს გადაუარეთ forEach ით და აქედან კენტი რიცხვები გადაიტანეთ მეორე მასივში


// numList.forEach( (ricxvi) => {
//     console.log(ricxvi);
//     if(ricxvi % 2 == 1) {
//         meoreList.push(ricxvi)
//     }
// } )

// console.log(meoreList);

// numList = numList.filter( (ricxvi) => ricxvi % 2 == 0 )

// let napovni = numList.find( (ricxvi) => ricxvi % 2 == 1 )

// console.log(secondArray);
//  console.log(napovni);


// let productList= ["samsung", "iphone", "samsung", "samsung"]

// let filtered = productList.filter((phone) => phone == "samsung" )

// console.log(filtered);


let numList = [50, 12, 11, 7, 30, 5]

// მომხმარებელს შემოაყვანინეთ ციფრი და მიიღეთ ახალი მასივი, 
// სადაც ზემოაღნიშნული რიცხვების მაგ ციფრზე გაყოფილებით შეივსება


let user = prompt("შეიყვანე ციფრი")

let updated = numList.map(( ricxvi ) => ricxvi / user)

console.log(updated);















// let gasammagebuli = numList.map( (item) => item * 3)

// console.log(gasammagebuli);


