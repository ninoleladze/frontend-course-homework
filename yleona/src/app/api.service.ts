import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { AllProducts } from './all-products';
import { CartProduct } from './cart-product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   constructor(public http: HttpClient) {

   }
 
   
     postCard(cartInfo: any) {
    return this.http.post('https://api.everrest.educata.dev/shop/cart/product', cartInfo, {headers: {Authorization: `Bearer ${sessionStorage.getItem("user")}`}});
  }

  getAllBaskets() {
    return this.http.get<CartProduct[]>("https://api.everrest.educata.dev/shop/cart", {headers: {Authorization: `Bearer ${sessionStorage.getItem("user")}`}})
  }

  updateCart(body:any) {
    return this.http.post("https://api.everrest.educata.dev/shop/cart/product", body, {headers: {Authorization: `Bearer ${sessionStorage.getItem("user")}`}})
  }

  removeProducts(id:any) {
    return this.http.delete(`https://api.everrest.educata.dev/shop/cart/product/${id}`, {headers: {Authorization: `Bearer ${sessionStorage.getItem("user")}`}});
  }



 getAll() {
    return this.http.get('https://api.everrest.educata.dev/shop/products/all');
   
  }
 getCategories() {
    return this.http.get(
      'https://api.everrest.educata.dev/shop/products/categories'
    );
  }

 
 

  getbrandinfo(name: string) {
    return this.http.get<AllProducts>(
      `https://api.everrest.educata.dev/shop/products/brand/${name}?page_size=10`
    );
  }
   getListByCategory(id: any, page: any, size: any) {
    return this.http.get<AllProducts>(
      `https://api.everrest.educata.dev/shop/products/category/${id}?page_index=${page}&page_size=${size}`
    );
  }


  Search(searchInput: string, size: number) {
    return this.http.get<Product>(
      `https://api.everrest.educata.dev/shop/products/search?page_size=${size}&keywords=${searchInput}`
    );
  }
  

  filter(
    searchText: string = '',
    rating: number | string = '',
    min: string = '1',
    max: string = '99999',
    type: string,
    sort: string,
    size: number
  ) {
    let isRated = rating != '' ? '&rating=' : '';
    let isChosenType = type != '' ? '&sort_by=' : '';
    let isSorted = sort != '' ? '&sort_direction=' : '';

    return this.http.get<Product>(
      `https://api.everrest.educata.dev/shop/products/search?page_size=${size}&keywords=${searchText}${isRated}${rating}&price_min=${min}&price_max=${max}${isChosenType}${type}${isSorted}${sort}`
    );
  }
   getCardsOnShopPage(page: any, size: any) {
    return this.http.get<AllProducts>(
      `https://api.everrest.educata.dev/shop/products/all?page_index=${page}&page_size=${size}`
    );
  }
signUp(info: any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_up", info)
  }
  signIn(info: any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_in", info)
  }

  getUser() {
    return this.http.get("https://api.everrest.educata.dev/auth", {headers: {Authorization: `Bearer ${sessionStorage.getItem("user")}`}})
  }
  getCards() {
    return this.http.get<AllProducts>(
      'https://api.everrest.educata.dev/shop/products/all?page_size=10'
    );
  }
 getBrands() {
    return this.http.get<string[]>(
      'https://api.everrest.educata.dev/shop/products/brands'
    );
  }
 
getProductDetails(id: string) {
  return this.http.get(`https://api.everrest.educata.dev/shop/products/id/${id}`);
}

   }


