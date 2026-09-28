// let userText = prompt("შეიყვანე სახელი")
// let userLastName = prompt("შეიყვანე გვარი")

// function misalmeba(saxeli, gvari = "ramegvari") {
//     console.log(`gamarjoba ${saxeli} ${gvari}`);
// }

// misalmeba("giorgi", "gagnidze")
// misalmeba("luka", "jinchveleishvili")
// misalmeba("ana", "maisuradze")
// misalmeba("nino", "leladze")
// misalmeba(userText, userLastName)




 let firstArray = []
 let secondArray = []   

// შექმენით ფუნქცია, რომელშიც დაწერთ ზოგადად მასივში 
// რიცხვების დაპუშვის ლოგიკას,
// ეს მასივი შეავსეთ 15 რაიმე რენდომული რიცხვით


// Math.round(Math.random() * 30)

function numFiller(masivi, raodenoba) {
    for(let i = 0; i < raodenoba; i++) {
        let randomNumber = Math.round(Math.random() * 50)
        masivi.push(randomNumber)
    }
}

numFiller(firstArray, 15)
numFiller(secondArray, 40)




function satesto() {
    let x = 25
    let y = 10

    return x * y

    
}





let academy = satesto()

// console.log(academy);



// შექმენით ფუნქცია, რომელსაც არგუმენტებად გადასცემთ 
// რაიმე პროდუქტის საწყისს ფასს, ასევე პროცენტის რიცხვს, თუ რამდენი უნდა
// დააკლდეს. ამ ფუნქციამ დაგიბრუნოთ პროდუქტის საბოლოო ფასი
    let userSawyisi = prompt("შეიყვანე ფასი")
    let userProcent = prompt("შეიყვანე პროცენტი")


function getSale(sawyisiFasi, procenti) {
        let sale = sawyisiFasi * (procenti / 100)
        return sawyisiFasi - sale
}

console.log( getSale(200, 20) ); 
console.log( getSale(500, 45) );
console.log( getSale(userSawyisi, userProcent) );
