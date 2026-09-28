import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from "../filter/filter.component";
import { RouterModule } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";
import { InformationsideComponent } from "../informationside/informationside.component";
import { CartService } from '../cartservice.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, FilterComponent, RouterModule, CarouselComponent, InformationsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  public categories: any[] = [];
  public products: any = { products: [] };
  public pageList: number[] = [];
  public currentPage: number = 1;
  public pageSize: number = 15;
  public totalSize: number = 0;
  public isCategoryShown: boolean = false;
  public currentCategory: any = null;

  constructor(public service: ApiService, public cartService:CartService) {}

  ngOnInit(): void {
    this.getCategories();
    this.showProducts(this.currentPage, this.pageSize);
  }

  getCategories() {
    this.service.getCategories().subscribe((list: any) => {
      this.categories = list as any[];
    });
  }

  page(data: any) {
    this.pageList = [];
    this.totalSize = data.total;
    let pages = Math.ceil(data.total / this.pageSize);
    for (let i = 1; i <= pages; i++) {
      this.pageList.push(i);
    }
  }

  showProducts(page: number = 1, size: number = this.pageSize) {
    this.isCategoryShown = false;
    this.currentPage = page;
    this.service.getCardsOnShopPage(page, size).subscribe((data: any) => {
      this.products = data;
      this.page(data);
    });
  }

  showByCategory(category: string, pageNum: number) {
    this.isCategoryShown = true;
    this.currentCategory = category;
    this.currentPage = pageNum;
    this.service.getListByCategory(category, pageNum, this.pageSize).subscribe((data: any) => {
      this.products = data;
      this.page(data);
    });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      if (!this.isCategoryShown) {
        this.showProducts(this.currentPage, this.pageSize);
      } else {
        this.showByCategory(this.currentCategory, this.currentPage);
      }
    }
  }

  nextPage() {
    if (this.currentPage < this.pageList.length) {
      this.currentPage++;
      if (!this.isCategoryShown) {
        this.showProducts(this.currentPage, this.pageSize);
      } else {
        this.showByCategory(this.currentCategory, this.currentPage);
      }
    }
  }

  changePageSize() {
    this.currentPage = 1;
    let pageArea = this.pageSize === 0 ? this.totalSize : this.pageSize;
    if (!this.isCategoryShown) {
      this.showProducts(this.currentPage, pageArea);
    } else {
      this.showByCategory(this.currentCategory, this.currentPage);
    }
  }

  onFilterChanged(filterData: any) {
    if (!filterData) {
      this.showProducts(1, this.pageSize);
      return;
    }
    this.products = filterData;
    this.page(filterData);
  }
addToCart(product: any): void {
  const id = product._id;
  if (!id || !/^[a-f\d]{24}$/i.test(id)) {
    console.error('❌ Invalid product ID:', id);
    return;
  }

  const cartItem = { id, quantity: 1 };
  console.log('📦 Sending cartItem:', cartItem);

  const headers = this.cartService
    .getAuthHeaders()
    .set('Content-Type', 'application/json');

  this.cartService.postCart(cartItem, ).subscribe({
    next: () => console.log('✅ Product added to cart'),
    error: (err) => {
      console.error('❌ Error adding to cart:', err);
      console.error('⚠️ Validation details:', err.error);
    }
  });
}


}


