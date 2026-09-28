import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todochild',
  imports: [],
  templateUrl: './todochild.component.html',
  styleUrl: './todochild.component.css'
})
export class TodochildComponent {

 @Input() public childList:any;

}
