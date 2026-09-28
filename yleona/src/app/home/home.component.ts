import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { FilterComponent } from '../filter/filter.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { InformationsideComponent } from '../informationside/informationside.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
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
  public addedToCart: boolean = false;
  public authError: boolean = false;
  public loading: boolean = true;

  constructor(
    private service: ApiService,
    public authService: AuthService,
    private router: Router
  ) {}

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
    this.loading = true;
    this.isCategoryShown = false;
    this.currentPage = page;
    this.service.getCardsOnShopPage(page, size).subscribe({
      next: (data: any) => {
        this.products = data;
        this.page(data);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load products:', err);
        this.loading = false;
      }
    });
  }

  showByCategory(category: string, pageNum: number) {
    this.loading = true;
    this.isCategoryShown = true;
    this.currentCategory = category;
    this.currentPage = pageNum;
    this.service.getListByCategory(category, pageNum, this.pageSize).subscribe({
      next: (data: any) => {
        this.products = data;
        this.page(data);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load category products:', err);
        this.loading = false;
      }
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

  addToCart(product: any, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (!this.authService.isLoggedIn()) {
      this.authError = true;
      setTimeout(() => {
        this.authError = false;
        this.router.navigate(['/signin']);
      }, 2000);
      return;
    }
    
    const cartInfo = {
      quantity: 1,
      price: product.price.current,
      productId: product._id || product.id,
    };
    
    this.service.postCard(cartInfo).subscribe({
      next: () => {
        this.addedToCart = true;
        setTimeout(() => this.addedToCart = false, 1500);
      },
      error: (err) => {
        console.error('Failed to add to cart:', err);
      }
    });
  }

  handleFilterResults(results: any) {
    this.products = results;
    this.page(results);
  }
}
