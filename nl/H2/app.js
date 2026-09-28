
console.log("RGB Colors:");
for (let i = 0; i < 10; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  console.log(`rgb(${red},${green},${blue})`); 
}