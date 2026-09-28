import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public service: ToolsService) {
    this.showCartNum()
    this.showAll()
  }


  public cartNumber:any;

  showAll() {
    this.service.getAllBaskets().subscribe( (data:any) => {
      console.log(data);
      this.service.cartNumberTruck.next(data.length)
    } )
  }

  showCartNum() {
    this.service.cartNumberTruck.subscribe( (data:number) => {
      console.log(data);
      this.cartNumber = data
    } )
  }
}
