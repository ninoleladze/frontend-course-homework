import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartservice.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { identity } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [CommonModule, FooterComponent],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = []; // use any[] if CartProduct doesn't have nested product structure
  loading = false;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Load cart data
  loadCart(): void {
    this.loading = true;
    this.cartService.getAllBaskets().subscribe({
      next: (data) => {
        this.cart = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load cart:', err);
        this.loading = false;
      }
    });
  }

  change(productId: string, quantity: number): void {
  if (quantity < 1) return;
  const body = { productId, quantity };
  this.cartService.patchCart(body).subscribe({
    next: () => this.loadCart(),
    error: (err) => console.error('Failed to update cart:', err)
  });
}


// Delete product from cart
deleteItem(productId: string): void {
  console.log('🗑 Deleting product:', productId);
  this.cartService.removeProduct(productId).subscribe({
    next: () => {
      console.log('✅ Item deleted');
      this.loadCart();
    },
    error: (err) => console.error('❌ Failed to delete item:', err)
  });
}

  // Calculate total
  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}
