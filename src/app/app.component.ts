import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ProductsComponent } from "./components/products/products.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OrderComponent } from "./components/order/order.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, OrderComponent, FooterComponent , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcommerceApp';

  direction:string="ltr"
  language$ : Observable<string> //type observable take $ for yourself to know that is an observable
  constructor(private store : Store<{language: string}>){
    this.language$ = this.store.select("language")

    this.language$.subscribe((lang)=>
    {
      this.direction = (lang == "en")? 'ltr' : 'rtl'
    })
  }
}
