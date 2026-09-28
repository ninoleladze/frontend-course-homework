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

  filterAllFoods(sicxare: any, nuts: any, veget: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veget}&nuts=${nuts}&spiciness=${sicxare}`)
  }
}
