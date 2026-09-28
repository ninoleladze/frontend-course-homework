import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  constructor(public service: ToolsService) {
    this.movidaInfo()
  }

  public age: any

movidaInfo() {
  this.service.traileri.subscribe( (data:number) => {
    this.age = data
  } )
}

}
