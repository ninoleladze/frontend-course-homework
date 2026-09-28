import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'less2';
constructor(){
  console.log("constg");
  this.satesto()
  this.firstName = "ninIKOOO"
  
}
public firstName: string = "nini"


public userAge: number = 16
satesto(){
  console.log("blalala");
  let myName ="nino"

}
rameLogic(){
this.userAge = 56  
  
}

}

