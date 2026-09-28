import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(public service: ToolsService) {
    this.daichire();
    this.allCart();
  }

  public info: any;
  public cartList: any;

  daichire() {
    this.service.meoreTraileri.subscribe((data: number) => {
      this.info = data;
    });
  }

  allCart() {
    this.service.getAllBaskets().subscribe((data: any) => {
      this.cartList = data;
    });
  }

  increase(item: any) {
    item.quantity++

    let cartObject = {
      quantity: item.quantity,
      price: item.price,
      productId: item.product.id,
    };


    this.service.updateCart(cartObject).subscribe()
  }
}

// interceptor
// interface
