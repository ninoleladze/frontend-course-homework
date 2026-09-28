import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getAll() {
   return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getCategories() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  filterCategory(id: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }
}
