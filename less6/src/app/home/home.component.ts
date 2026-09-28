import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public xelsawyo: ToolsService) {
    this.satesto()
    this.allCards()
    this.allCategories()
  }

  public allProducts: any;
  public categories: any;

  satesto() {
    this.xelsawyo.rameLogika()
  }

  allCards() {
    this.xelsawyo.getAllProducts().subscribe( (data: any) => this.allProducts = data )
  }


  allCategories() {
    this.xelsawyo.getAllCategories().subscribe( (data:any) => this.categories = data)
  }


}
