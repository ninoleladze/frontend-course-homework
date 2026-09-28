import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ISignUp } from '../../interfaces/sign-up';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ){}

  form!: FormGroup;

  ngOnInit(): void {
    // this.signUp()
    // this.verifyEmail()

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [0, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      zipcode: ['', Validators.required],
      avatar: ['', Validators.required],
      gender: ['MALE', Validators.required],
    })
  }

  signUp(){
    let signUpObject = this.form.value

    // let signUpObject: ISignUp = {
    //   firstName: "John",
    //   lastName: "Doe",
    //   age: 30,
    //   email: "joe@doe.com",
    //   password: "badpass123",
    //   address: "somewhere",
    //   phone: "+995599123456",
    //   zipcode: "0178",
    //   avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Jane",
    //   gender: "MALE"
    // }

    this.authenticationService.dosignUp(signUpObject).subscribe((response: any) => {
      console.log(response)
    })
  }

  verifyEmail(){
    let emailObject = {
      email: 'giogio123@doe.com'
    }

    this.authenticationService.verifyEmail(emailObject).subscribe((response: any) => {
      console.log(response.error)
    })
  }
}
