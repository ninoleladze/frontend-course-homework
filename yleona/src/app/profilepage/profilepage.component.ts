import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profilepage',
  imports: [CommonModule],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  userInfo: any = null; 

  constructor(public service: ApiService) {}

  myInfo() {
    this.service.getUser().subscribe((data: any) => {
      this.userInfo = data; 
    });
  }
}