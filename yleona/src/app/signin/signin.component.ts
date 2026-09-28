import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginError: string = '';

  constructor(
    public service: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  public loginFormInfo: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.loginFormInfo.valid) {
      this.service.signIn(this.loginFormInfo.value).subscribe({
        next: (data: any) => {
          this.authService.login(data.access_token);
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
