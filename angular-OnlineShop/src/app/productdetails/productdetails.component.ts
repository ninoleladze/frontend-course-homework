import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cartservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule, RouterModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  loading = true;
  error = false;
  addedToCart = false;
  adddetails: Product | null = null;
  selectedImage: string | null = null;

  constructor(
    public cartService: CartService,
    public route: ActivatedRoute,
    public api: ApiService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getProductDetails(id).subscribe({
        next: (data) => {
          this.adddetails = data as Product;
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
    if (!this.adddetails) return;
    this.cartService.postCart({ id: this.adddetails._id, quantity: 1 }).subscribe(response => {
      console.log('Added to cart:', response);
    });
  }
}
