import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(public http: HttpClient) { }

  public traileri: Subject<any> = new Subject()

  public meoreTraileri: BehaviorSubject<any> = new BehaviorSubject("STEP")



  getAllBaskets() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  updateCart(body:any) {
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }
}
