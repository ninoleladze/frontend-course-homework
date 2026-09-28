import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginError: string = '';

  constructor(
    public service: ApiService,
    private router: Router
  ) {}

  public loginFormInfo: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  login() {
    if (this.loginFormInfo.valid) {
      this.service.signIn(this.loginFormInfo.value).subscribe({
        next: (data: any) => {
          console.log(data);
          sessionStorage.setItem("user", data.access_token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.loginError = 'Login failed. Please check your credentials.';
          console.error('Login failed:', error);
        }
      });
    }
  }
}
