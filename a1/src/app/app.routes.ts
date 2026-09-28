import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
     {path: "", component:HomeComponent},
    {path: "cart", component:CartComponent},
    {path: "register", component: SignupComponent},
    {path: "login", component:SigninComponent},
    {path:"profile", component:ProfilepageComponent},
    {path:"productdetails/:id",component:ProductdetailsComponent}
];
