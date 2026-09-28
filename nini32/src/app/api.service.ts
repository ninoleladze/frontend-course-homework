import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { 
  }

    signUp(info:any){
      return this.http.post("https://api.everrest.educata.dev/auth/sign_up", info)
    }
  
}
