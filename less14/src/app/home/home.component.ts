import { Component } from '@angular/core';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public service: ToolsService) {
    this.showAllProducts(1)
  }

  public products: any;
  public pageList: number[] = []

  showAllProducts(pageInd: number) {
    console.log(pageInd);
    
    this.service.getShopProducts(pageInd).subscribe( (data:any) => {
      console.log(data);
      this.products = data.products


      let maxPage =  Math.ceil(data.total / data.limit)

      this.pageList = []

      for(let i = 1; i <= maxPage; i++) {
        this.pageList.push(i)
        
      }

      
      
    } )
  }
}
