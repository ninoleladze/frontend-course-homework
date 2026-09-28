import { Component } from '@angular/core';
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";


@Component({
  selector: 'app-home',
  imports: [FirstComponent, SecondComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
