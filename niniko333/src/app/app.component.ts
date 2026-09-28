import { Component } from '@angular/core';
import { TodoparentComponent } from "./todoparent/todoparent.component";

@Component({
  selector: 'app-root',
  imports: [ TodoparentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'less8';




}
