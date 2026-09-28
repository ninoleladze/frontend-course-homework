import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

interface CartProduct {
  quantity: number;
  product: {
    id: number;
    price: number;
    name: string;
    image?: string;
    // Add other product properties as needed
  };
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public cartList: CartProduct[] = [];
  loading = true;
  error = false;
  isEmpty = false;

  constructor(
    public service: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/signin']);
      return;
    }
    this.showAllCart();
  }

  showAllCart() {
    this.loading = true;
    this.service.getAllBaskets().subscribe({
      next: (data: CartProduct[]) => {
        this.cartList = data;
        this.isEmpty = this.cartList.length === 0;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load cart:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  increase(item: CartProduct) {
    const updatedQuantity = item.quantity + 1;

    const cartData = {
      quantity: updatedQuantity,
      price: item.product.price,
      productId: item.product.id
    };

    this.service.updateCart(cartData).subscribe({
      next: () => {
        item.quantity = updatedQuantity; // Update UI optimistically
      },
      error: (err) => {
        console.error('Failed to update cart:', err);
        this.showAllCart(); // Reload on error
      }
    });
  }

  decrease(item: CartProduct) {
    const updatedQuantity = item.quantity - 1;

    if (updatedQuantity <= 0) {
      this.deleteItem(item.product.id);
    } else {
      const cartData = {
        quantity: updatedQuantity,
        price: item.product.price,
        productId: item.product.id
      };

      this.service.updateCart(cartData).subscribe({
        next: () => {
          item.quantity = updatedQuantity; // Update UI optimistically
        },
        error: (err) => {
          console.error('Failed to update cart:', err);
          this.showAllCart(); // Reload on error
        }
      });
    }
  }

  deleteItem(id: number) {
    this.service.removeProducts(id).subscribe({
      next: () => {
        this.showAllCart(); // Reload after delete
      },
      error: (err) => {
        console.error('Failed to delete item:', err);
      }
    });
  }

  getTotal(): number {
    return this.cartList.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  checkout() {
    // Implement checkout functionality or navigate to checkout page
    alert('Checkout functionality will be implemented soon!');
  }
}
