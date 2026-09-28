import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public service: ApiService) {
    this.allCards();
  }

  public foodList: any;

  allCards() {
    this.service.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.foodList = data;
    });
  }

  addToCart(item: any) {
    let cartInfo = {
      quantity: 1,
      price: item.price,
      productId: item.id,
    };

    this.service.postCard(cartInfo).subscribe( (data:any) => {
      console.log(data);
      
    } )
    
  }
}
