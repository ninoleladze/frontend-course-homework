let input = document.querySelector("input")

let validation = /^[A-Z][a-z]{5,10}[0-9]{2,5}$/

function testUser(e) {
     if(  validation.test(e.target.value) ) {
        input.style.backgroundColor = "green"
     } else {
        input.style.backgroundColor = "red"
     } ;
     
 
}



fetch("https://rentcar.steppojects.ge/api/Car/popular")
.then( pasuxi => pasuxi.json() )
.then( (data) => {
    console.log(data);
    
} ).catch( () => console.log("კავშირის პრობლემა") )