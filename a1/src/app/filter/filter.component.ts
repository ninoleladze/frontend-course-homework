import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  imports:[FormsModule,CommonModule],
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<any>();

  brands: string[] = [];
  activeBrand: string = 'All';

  searchText: string = '';
  min: string = '1';
  max: string = '99999';
  rating: string = '';
  type: string = '';
  sort: string = '';
  size: number = 10;

  constructor(public service: ApiService) {}

  ngOnInit() {
    this.service.getBrands().subscribe((brands: any) => {
      this.brands = brands;
    });
  }

  selectBrand(brand: string) {
    this.activeBrand = brand;
    this.filterData();
  }

  filterData() {
    const min = this.min && this.min !== '' ? this.min : '1';
    const max = this.max && this.max !== '' ? this.max : '99999';
    let keywords = this.searchText;
    if (this.activeBrand && this.activeBrand !== 'All') {
      keywords = this.activeBrand + ' ' + (this.searchText || '');
    }
    this.service.filter(
      keywords,
      this.rating,
      min,
      max,
      this.type,
      this.sort,
      this.size
    ).subscribe(result => {
      this.filterChanged.emit(result);
    });
  }

  resetFilter() {
    this.activeBrand = 'All';
    this.searchText = '';
    this.min = '1';
    this.max = '99999';
    this.rating = '';
    this.type = '';
    this.sort = '';
    this.filterData();
  }
}