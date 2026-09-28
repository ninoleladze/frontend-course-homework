import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.name.trim()) {
      this.router.navigate(['/profile'], { queryParams: { name: this.name } });
    }
  }
}
