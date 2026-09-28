import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public service:ApiService){
this.allProducts()
}

 public  allProducts(){
    this.service.getAllProducts().subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}