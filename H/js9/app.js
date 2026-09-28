
// let randNum = Math.round(Math.random() * (200 - 100) + 100);
   

// let randNum2 = Math.round(Math.random() * (500 - 300) + 300);
    
//     for (let i = randNum; i <=randNum2 ; i++) {
//       if (i % 5 === 0) {
//         console.log(i);
//       }
//     }

///////////////////////////////////

    // for (let i = 100; i <= 1000; i++) {
    //   if (i % 2 === 0 && i % 5 === 0) {
    //     console.log(i);
    //   }
    // }

// for (let i = 100; i < 1000; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }
 
// for (let i = 100; i < 1000; i += 10) {
//   console.log(i);
// }
   
// for (let i = 100; i <= 300; i++) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }


const user = Number(
    prompt("shemoiyvane ricxvi 10dan 100 mde:")
  );

  const randNum = Math.round(Math.random() * (300 - 200) + 200);
  
 for (let i = user; i <= randNum; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }