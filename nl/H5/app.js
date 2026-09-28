
let userInput = prompt("sheiyvanet ricxvi 10dan 100 mde");
let userNumber = Number(userInput); 


let randomNumber = Math.floor(Math.random() * (300 - 200 + 1)) + 200;

console.log("shemoyvanili ricxvi:", userNumber);
console.log("shemtxveviti rivcxvi 200-300 mde", randomNumber);
console.log("3 is jeradi ricxvebi");

if (userNumber >= 10 && userNumber <= 100) {
for (let i = userNumber; i <= randomNumber; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
} 

else {
  console.log("araswori sheyvana!!!!!!!!!!!!!!!!!!!!!");
}
