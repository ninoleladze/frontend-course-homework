import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartProduct } from './cart-product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllBaskets() {
    return this.http.get<CartProduct[]>("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  updateCart(body:any) {
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }

  removeProducts(id:any) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
}
