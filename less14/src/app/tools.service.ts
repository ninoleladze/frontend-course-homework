import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(public http: HttpClient) { }

  public cartNumberTruck:Subject<number> = new Subject()

  getAllBaskets() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }


  getShopProducts(pageInd: number) {
    return this.http.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${pageInd}&page_size=5`)
  }


}
