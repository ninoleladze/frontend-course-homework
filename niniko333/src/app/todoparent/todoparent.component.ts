import { Component } from '@angular/core';
import { TodochildComponent } from "../todochild/todochild.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoparent',
  imports: [TodochildComponent, FormsModule],
  templateUrl: './todoparent.component.html',
  styleUrl: './todoparent.component.css'
})
export class TodoparentComponent {
  public inputText: string = "";
  public todoList: string[] = [];

  addData() {
    this.todoList.push(this.inputText);
    console.log(this.todoList);
  }

  deleteData(index: number) {
    this.todoList.splice(index, 1);
  }
}