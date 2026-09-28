import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CategoriesComponent } from "../categories/categories.component";

@Component({
  selector: 'app-all-cards',
  imports: [CategoriesComponent],
  templateUrl: './all-cards.component.html',
  styleUrl: './all-cards.component.css'
})
export class AllCardsComponent {

  constructor(public service: ApiService) {
    this.showAllCards()
  }

  public foodList:any

  showAllCards() {
    this.service.getAllProducts().subscribe( (data) => {
      console.log(data);
      this.foodList = data
    } )
  }


  parking(info:any) {
    this.foodList = info
    
  }
}
