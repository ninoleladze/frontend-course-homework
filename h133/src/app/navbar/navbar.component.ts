import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public cartCount: number = 0;

  constructor(private service: ApiService) {
    
  }

  ngOnInit(): void {
    this.updateCartCount();
  }

  updateCartCount(): void {
    this.service.Allbaskets().subscribe((data: any) => {
      this.cartCount = data.length;     });
  }
}