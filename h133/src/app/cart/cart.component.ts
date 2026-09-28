import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ApiService) {
    this.allBasketCards()
  }

  public cartList: any;

  allBasketCards() {
    this.service.Allbaskets().subscribe( (data:any) => {
      console.log(data);
      this.cartList = data
    } )
  }
}
