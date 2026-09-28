import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

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
  authError = false;
  adddetails: any;
  selectedImage: string | null = null;
  
  constructor(
    public route: ActivatedRoute,
    public api: ApiService,
    private authService: AuthService,
    private router: Router
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

  addToCart(item: any) {
    if (!this.authService.isLoggedIn()) {
      this.authError = true;
      setTimeout(() => {
        this.authError = false;
        this.router.navigate(['/signin']);
      }, 2000);
      return;
    }
    
    const cartInfo = {
      quantity: 1,
      price: item.price.current,
      productId: item._id || item.id,
    };
    
    this.api.postCard(cartInfo).subscribe({
      next: () => {
        this.addedToCart = true;
        setTimeout(() => this.addedToCart = false, 1500);
      },
      error: (err) => {
        console.error('Failed to add to cart:', err);
      }
    });
  }
}
