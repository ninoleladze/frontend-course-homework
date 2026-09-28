import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todochild',
  imports: [CommonModule,FormsModule],
  templateUrl: './todochild.component.html',
  styleUrl: './todochild.component.css'
})
export class TodochildComponent {
  @Input() public childList: any;
  @Output() public deleteItem = new EventEmitter<number>();

  delete(index: number) {
    this.deleteItem.emit(index);
  }
}