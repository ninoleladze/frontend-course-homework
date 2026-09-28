import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(public service: ApiService) {
    this.showCategories()
  }

  public categories:any

  @Output() public satvirto: EventEmitter<any> = new EventEmitter()

  showCategories() {
    this.service.getAllCategories().subscribe( (data) => {
      this.categories = data
    } )
  }


  changeCategory(id:any) {
    this.service.getFoodByCategory(id).subscribe( (data:any) => {
      console.log(data.products);
      this.satvirto.emit(data.products)
    } )
  }
}
