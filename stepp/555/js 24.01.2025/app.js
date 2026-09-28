// // let password = "abc123"

// // let user = prompt("შეიყვანე პაროლი")


// // while(password != user) {
// //     user = prompt("შეიყვანე პაროლი")
// // }


// // let random = Math.round(Math.random() * 15)

// // console.log(random);


// let list = []


// while(list.length < 10) {
//     let random = Math.round(Math.random() * 15)
//     if(!list.includes(random)) {
//         list.push(random)
//     }
// }

// console.log(list);


// ობიექტი -- object



// let phone = {
//     brand: "Samsung",
//     model: "S25 Ultra",
//     price: 3999,
//     color: "black",
//     fullInfo: function() {
//         return `${this.brand} ${this.model}`
//     }
// }


// console.log(phone.fullInfo());

// let list = [15, 30, 50,22]

// list.forEach( (item) => console.log(item) )



let carsArea = [
    {
        id: 1,
        marka: "Mercedes",
        modeli: "S-class",
        feri: "black",
        fasi: 8900
    },
    {
        id: 2,
        marka: "BMW",
        modeli: "5-series",
        feri: "grey",
        fasi: 5500
    },
    {
        id: 3,
        marka: "Audi",
        modeli: "RS6",
        feri: "blue",
        fasi: 18900
    },
    {
        id: 4,
        marka: "Porsche",
        modeli: "911",
        feri: "red",
        fasi: 65000
    },
]

// carsArea.forEach( (item) => console.log(item.marka) )


// გაფილტრეთ ეს მასივი ისეთი ობიექტებით, რომელთა ფასიც მეტია 10000-ზე

let filteredCars = carsArea.filter( (item) => item.fasi > 10000 && item.fasi < 20000 )


let onlyPrices = carsArea.map((item) => item.fasi )

console.log(onlyPrices);

let total = onlyPrices.reduce((wina, mimdinare) => wina + mimdinare)

console.log(total);