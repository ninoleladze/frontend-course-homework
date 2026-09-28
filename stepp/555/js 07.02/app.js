// let input = document.querySelector("#myInput")


// function showMyText() {
//     console.log( input.value );
    
// }


// function bechdvisas(e) {
//     if(e.key == "Enter") {
//         console.log(e.target.value);
        
//     }
    
// }



// შექმენით ინფუთი, სადაც ჩაწერთ ასაკს, ენთერის დაჭერაზე, სრულწლოვანის
// შემთხვევაში h1 ში მწვანედ გამოისახოს "სრულწლოვანი, " სხვა
// შემთხვევაში წითლად "არასრულწლოვანი"





// ------------------------------------------------------


let h1 = document.querySelector("#age")


function showMyAge(e) {
    if(e.key == "Enter") {
      if(e.target.value >= 18) {
        h1.innerHTML = "სრულწლოვანია"
        h1.style.color = "green"
      }
      else if(e.target.value < 18) {
        h1.innerHTML = "არასრულწლოვანია"
        h1.style.color = "red"
      }
        
    }
    
}