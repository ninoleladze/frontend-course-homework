//  let h1 = document.querySelector("#myH1")
let h1 = document.getElementById("myH1")

h1.style.backgroundColor = "red"
h1.style.textAlign = "center"
h1.style.fontSize = "50px"



// შექმენით ღილაკი და ასევე p თეგი
// ღილაკზე დაკლიკვისას გამოჩნდეს პრომპტის ფანჯარა
// თუ მასში შეყვანილი რიცხვი 18 ან მეტია,
// მაშინ ტექსტი გამოისახოს "სრულწლოვანი" და ასევე
// ფერი უნდა მიეცეს მწვანე, ხოლო სხვა შემთხვევაში
// დაეწეროს "არასრულწლოვანი" და გაწითლდეს

let p = document.getElementById("text")

function logika() {
    let userAge = prompt("შეიყვანე ასაკი")

    if(userAge >= 18) {
        p.innerText = "სრულწლოვანია"
        p.style.color = "green"
    }

    else {
          p.innerText = "არასრულწლოვანია"
        p.style.color = "red"
    }
}


classList
className

toggle