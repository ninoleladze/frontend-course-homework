import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shvili',
  imports: [],
  templateUrl: './shvili.component.html',
  styleUrl: './shvili.component.css',
})
export class ShviliComponent {

  @Input() public gvari: any;

  @Input() public rameSaxeli: any;
  @Input() public ferebiMassiv: any;
  @Output() public traileri: EventEmitter<any> = new EventEmitter()
  @Output() public satvirto: EventEmitter<any> = new EventEmitter()

  public myAge: number = 26;

  sendData() {
    this.traileri.emit(this.myAge)
  }


  sendTruckData() {
    this.satvirto.emit(  Math.round(Math.random() * 50) )
  }
}
