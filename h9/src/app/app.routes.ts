import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];
