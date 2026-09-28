import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  imports: [RouterModule],
  templateUrl: './navbar2.component.html',
  styleUrl: './navbar2.component.css'
})
export class Navbar2Component {
GetAllProducts: any;


  constructor(public service: ApiService) {
    
    this.showCategories()
  }

  public products:any;
  public categories: any;
  public activeCatory: number = 0

  

  ngOnInit() {
    this.service.getAllProducts().subscribe( (data:any) => {
      console.log(data);
      this.products = data.products
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
