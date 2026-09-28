
function randomNumbers(count, min, max) {
    return Array.from({ length: count },()=> Math.floor(Math.random() * (max - min + 1)) + min);
}

function randomColors(count) {
    return Array.from({ length:count }, ()=> `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
}

let numbersCount = +prompt("რიცხვების რაოდენობა");
let Start = +prompt("საწყისი");
let End = +prompt("ბოლო ");
let colorsCount = +prompt("ფერების რაოდენობა");

console.log(randomNumbers(numbersCount, Start, End));
console.log( randomColors(colorsCount));
 