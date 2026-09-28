import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  loading = true;
  error = false;
  addedToCart = false;
  adddetails: any;
selectedImage: string | null = null;
  constructor(
    public cartService:CartService,
    public route: ActivatedRoute,
    public api: ApiService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getProductDetails(id).subscribe({
        next: (data) => {
          this.adddetails = data;
          this.loading = false;
          console.log('Product details:', this.adddetails); 
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
      });
    }
  }


addToCart() {
  const product = { id: 1, quantity: 2 };
  this.cartService.postCart(product).subscribe(response => {
    console.log('Added to cart:', response);
  });
}

}