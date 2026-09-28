import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(public actR: ActivatedRoute, public service: ApiService) {
    this.showMyRoom()
  }

public roomInfo:any;
  showMyRoom() {
    this.actR.params.subscribe( (data:any) => {
      this.service.getRoom(data.id).subscribe( (data: any) => {
        console.log(data);
        this.roomInfo = data
      } )
      
    } )
  }
}
