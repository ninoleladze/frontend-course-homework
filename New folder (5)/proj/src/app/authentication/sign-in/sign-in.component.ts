import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{
  constructor(private authenticationService: AuthenticationService){}
  ngOnInit(): void {
    let emailPassword = {
      email: 'giogio999@doe.com',
      password: 'badpass123'
    }

    this.authenticationService.signIn(emailPassword).subscribe((response) => {
      console.log(response)
    })
  }
}
