import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '' , redirectTo : 'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'About',component: AboutUsComponent,
    children: [
    // {path: '', component: VisionComponent},
      {path: '' , redirectTo : 'vision' , pathMatch:'full' },
      { path: 'vision', component: VisionComponent },
      { path: 'values', component: ValuesComponent },
    ],
  },
//   {path: 'Details' , component: DetailsComponent}, without id
  {path: 'Details/:id' , component: DetailsComponent},
  { path: '**', component: NotFoundComponent },
];
