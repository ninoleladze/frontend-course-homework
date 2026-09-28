import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "auth", component: AuthPageComponent},
    {path: "profile", component: ProfilepageComponent}
];
