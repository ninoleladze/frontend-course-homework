import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profilepage',
  imports: [],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {

  constructor(public service: ApiService) {}

  myInfo(){
    this.service.getUser().subscribe( (data:any) => {
      console.log(data);
      
    } )
  }
}
