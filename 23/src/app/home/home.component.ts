import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
public products: any;

  constructor(public service: ApiService){
  this.showAllCards()
  }

  showAllCards(){
    this.service.getAll().subscribe({
      next: (data:any)=> {
        console.log(data);
        
      },
      error: ()=>{}
      
    })
  }
}
