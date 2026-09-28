import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public service: ApiService) {
    this.allRooms()
  }

  public rooms: any;

  allRooms() {
    this.service.getAllRooms().subscribe( (data:any) => {
      console.log(data);
      this.rooms = data
    } )
  }
}
