import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ApiService } from "../api.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    public service: ApiService,
    public authService: AuthService
  ) {}

  logout() {
    this.authService.logout();
  }
}
