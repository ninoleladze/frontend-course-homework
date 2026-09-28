import { Component } from '@angular/core';
import { SignupComponent } from "../signup/signup.component";
import { SigninComponent } from "../signin/signin.component";

@Component({
  selector: 'app-auth-page',
  imports: [SignupComponent, SigninComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
