class Main{
    constructor(saxeli, gvari){
        this.FirstName = saxeli
        this.lastName = gvari
    }
    FirstName = ""
    lastName = ""
    





    someThing(){
        return "STEP"
    }

}


console.log(Main);

let myLogic = new Main("nino","leladze")
let other = new Main("ana","minasiani")
console.log(myLogic);

console.log(other.someThing());



