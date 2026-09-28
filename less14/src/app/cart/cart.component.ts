import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ToolsService) {
    this.showAll()
  }

  public cartList:any[] = []

  showAll() {
    this.service.getAllBaskets().subscribe( (data:any) => {
      console.log(data);
      this.cartList = data
      this.service.cartNumberTruck.next(data.length)
    } )
  }
}
