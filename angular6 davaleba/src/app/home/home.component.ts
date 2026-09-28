import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public service: ApiService) {
    this.showAllCards()
    this.showCategories()
  }

  public products:any;
  public categories: any;
  public activeCatory: number = 0

  showAllCards() {
    this.activeCatory = 0
    this.service.getAll().subscribe( {
      next: (data: any) => {
        console.log(data);
        this.products = data
      },
      error: () => {}
    } )
  }


  showCategories() {
    this.service.getCategories().subscribe( {
      next: (data:any) => {
        console.log(data);
        this.categories = data
      },
      error: () => {}
    } )
  }


  filterByCategory(id: any) {
    this.activeCatory = id
    this.service.filterCategory(id).subscribe( (data:any) => {
      console.log(data);
      this.products = data.products
    } )
    
  }

}



