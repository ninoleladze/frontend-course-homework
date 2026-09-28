import { Component } from '@angular/core';
import { ShviliComponent } from './shvili/shvili.component';
import { TodoparentComponent } from "./todoparent/todoparent.component";

@Component({
  selector: 'app-root',
  imports: [ShviliComponent, TodoparentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'less8';

  
}
