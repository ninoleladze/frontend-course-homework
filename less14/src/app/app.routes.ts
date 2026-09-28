import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cart", component: CartComponent},
    {path: "**", component: ErrorpageComponent},
    
];
