import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getAllProducts() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  postCard(cartInfo:any) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", cartInfo)
  }

  Allbaskets () {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }
}
