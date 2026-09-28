import { Component } from '@angular/core';
import { ShviliComponent } from './shvili/shvili.component';
import { TodoparentComponent } from "./todoparent/todoparent.component";
import { AllCardsComponent } from "./all-cards/all-cards.component";

@Component({
  selector: 'app-root',
  imports: [ShviliComponent, TodoparentComponent, AllCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'less8';

  public firstName: string = "Irakli"

  public lastName: string = "Adamashvili"

  public colorList: string[] = ["red", "green", "blue", "orange", "yellow"]
  public text:any;

  public mosuliNum:any;

  parking(info:any) {
    console.log(info);
    this.text = info
  }


  truckDock(num: any) {
    console.log(num);
    this.mosuliNum = num
  }

}
