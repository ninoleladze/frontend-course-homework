import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public service: ApiService) {}


  public formInfo: FormGroup = new FormGroup( {
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    zipcode: new FormControl(),
    avatar: new FormControl(),
    gender: new FormControl(),
  } )

  register() {
    this.service.signUp(this.formInfo.value).subscribe( (data:any) => {
      console.log(data);
      
    } )
  }

}
