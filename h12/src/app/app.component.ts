import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
}

interface Item {
  id: number;
  name: string;
  categoryId: number;
  imageUrl: string;
  price: number;
  spiciness: number;
  containsNuts: boolean;
  vegetarian: boolean;
}

@Component({
  selector: 'app-category-cards',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule], 
})
export class CategoryCardsComponent implements OnInit {
  categories: Category[] = [];
  items: Item[] = [];
  savedItems: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<Category[]>('https://restaurant.stepprojects.ge/api/categories')
      .subscribe(data => this.categories = data);
  }

  fetchItems(categoryId: number) {
    this.http.get<Item[]>(`https://restaurant.stepprojects.ge/api/items?categoryId=${categoryId}`)
      .subscribe(data => {
        this.items = data;
        this.savedItems = [...this.savedItems, ...data];
      });
  }
}
