import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todochild',
  imports: [],
  templateUrl: './todochild.component.html',
  styleUrl: './todochild.component.css'
})
export class TodochildComponent {

 @Input() public childList:any;

@Output() public satvirto: EventEmitter<any> = new EventEmitter()

 removeData(ind: any) {
  this.satvirto.emit(ind)
  
 }
}
