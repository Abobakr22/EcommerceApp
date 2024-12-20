import { authGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '' , redirectTo : 'Home' , pathMatch:'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'products', component: ProductsComponent , canActivate: [authGuard] }, //adding created guard called auth on this comp
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent},
  { path: 'AddProduct', component: AddProductComponent },
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



//how to apply lazy loading for a component
// { path: 'products',
//   loadComponent:()=>
//    import('./components/products/products.component')
//   .then((obj)=> obj.ProductsComponent) ,
//   canActivate: [authGuard]
//  },
