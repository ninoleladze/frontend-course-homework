// cart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartProduct {
  id: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public baseUrl = 'https://api.everrest.educata.dev/shop/cart';

  constructor(public http: HttpClient) {}

  public getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('user');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  public jsonAuthHeaders(): HttpHeaders {
    return this.getAuthHeaders().set('Content-Type', 'application/json');
  }

  /**
   * Create a new cart and add the first product.
   */
  public postCart(cartInfo: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/product`,
      cartInfo,
      { headers: this.jsonAuthHeaders() }
    );
  }

  /**
   * Update an existing cart (add or update product quantities).
   */
  public patchCart(cartInfo: any): Observable<any> {
    return this.http.patch(
      `${this.baseUrl}/product`,
      cartInfo,
      { headers: this.jsonAuthHeaders() }
    );
  }

  /**
   * Get all items in the user's cart.
   */
  public getAllBaskets(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(
      this.baseUrl,
      { headers: this.getAuthHeaders() }
    );
  }

  /**
   * Remove a product from the cart by product ID.
   */
  public removeProduct(id: string): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/product/${id}`,
      { headers: this.getAuthHeaders() }
    );
  }
}
