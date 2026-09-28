import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public service: ApiService) {}

  public loginFormInfo: FormGroup = new FormGroup( {
    email: new FormControl(),
    password: new FormControl(),
  } )




  login() {
    this.service.signIn(this.loginFormInfo.value).subscribe( (data:any) => {
      console.log(data);
      sessionStorage.setItem("user", data.access_token)
    } )
  }
}
