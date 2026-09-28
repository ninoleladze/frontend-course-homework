import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  constructor(public service: ToolsService) {}

  public myAge: number = 26

  sendData() {
    this.service.traileri.next(this.myAge)
  }


  secondSEND() {
    this.service.meoreTraileri.next( Math.round(Math.random() * 50) )
  }
}
