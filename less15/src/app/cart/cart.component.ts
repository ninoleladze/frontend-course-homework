import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CartProduct } from '../cart-product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ApiService) {
    this.showAllCart()
  }

  public cartList: CartProduct[]= []


  showAllCart() {
    this.service.getAllBaskets().subscribe( (data:CartProduct[]) => {
      console.log(data);
      this.cartList = data
    } )
  }

  increase(item:any) {
    item.quantity++

    let cartData = {
      "quantity": item.quantity,
      "price": item.product.price,
      "productId": item.product.id
    }


    this.service.updateCart(cartData).subscribe()
    
  }

  decrease(item:any) {
    item.quantity--

    let cartData = {
      "quantity": item.quantity,
      "price": item.product.price,
      "productId": item.product.id
    }

 
    this.service.updateCart(cartData).subscribe()
    
  }


  deleteItem(id: number) {
    console.log(id);
    this.service.removeProducts(id).subscribe( () => {
      this.showAllCart()
    } )
  }
  
}
