import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUp } from '../interfaces/sign-up';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  dosignUp(signUpObject: ISignUp) {
    return this.http.post('https://api.everrest.educata.dev/auth/sign_up', signUpObject)
  }

  verifyEmail(email: any){
    return this.http.post('https://api.everrest.educata.dev/auth/verify_email', email)
  }

  signIn(emailPassword: any){
    return this.http.post('https://api.everrest.educata.dev/auth/sign_in', emailPassword)
  }
}
