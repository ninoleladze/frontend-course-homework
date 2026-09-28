import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todochild',
  imports: [],
  templateUrl: './todochild.component.html',
  styleUrl: './todochild.component.css'
})
export class TodochildComponent {
  @Input() public childList: any;
  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteItem.emit(index);
  }
}