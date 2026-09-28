import { Component } from '@angular/core';
import { SignupComponent } from "../signup/signup.component";
import { SigninComponent } from "../signin/signin.component";

@Component({
  selector: 'app-home',
  imports: [SignupComponent, SigninComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
