import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public service: ApiService) {
    this.allProducts()
  }

  // public  inputText:string = ""
  public allFoods:any[] = []
  public spiciness: string = "-1"
  public nuts: any = "";
  public vegeterian: any = "";

  allProducts() {
    this.service.getAllProducts().subscribe( (data:any) => {
      console.log(data);
      this.allFoods = data
    } )
  }

  filterFoods() {

    let spc;
    if( this.spiciness == "-1") {
      spc = ""
    } else {
      spc = this.spiciness
    }
 
    this.service.filterAllFoods(spc, this.nuts, this.vegeterian).subscribe( (data:any) =>{
      console.log(data);
      this.allFoods = data
    } )
  }

  reset() {
    this.nuts = ""
    this.vegeterian = ""
    this.spiciness = ""
    this.allProducts()
  }
  
}
