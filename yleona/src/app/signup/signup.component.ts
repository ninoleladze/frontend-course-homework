import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { AuthService } from "../auth.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(
    public service: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  public formInfo: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    address: new FormControl(''),
    phone: new FormControl(''),
    zipcode: new FormControl(''),
    avatar: new FormControl(''),
    gender: new FormControl(''),
  });

  register() {
    if (this.formInfo.valid) {
      this.service.signUp(this.formInfo.value).subscribe({
        next: (data: any) => {
          console.log(data);
          // After successful registration, log in the user
          this.service.signIn({
            email: this.formInfo.value.email,
            password: this.formInfo.value.password
          }).subscribe({
            next: (loginData: any) => {
              sessionStorage.setItem("user", loginData.access_token);
              this.authService.login(loginData.access_token);
              this.router.navigate(['/']);
            },
            error: (error) => {
              console.error('Auto login after registration failed:', error);
            }
          });
        },
        error: (error) => {
          console.error('Registration failed:', error);
          // Handle registration error
        }
      });
    }
  }
}
