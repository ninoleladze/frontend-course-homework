import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getAllRooms() {
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
  }

  getRoom(id: any) {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }
}
