import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public serv: ToolsService) {
    this.test()
  }

  test() {
    this.serv.rameLogika()
  }


}
