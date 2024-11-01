import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { MyCustomDirectiveDirective } from '../../directives/my-custom-directive.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , FormsModule , MyCustomDirectiveDirective, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges , OnInit {

  products: Iproduct[] = [] as Iproduct[];
  filteredProducts: Iproduct[];
  totalOrderPrice: number = 0;

  @Input() receivedCategoryId : number = 0   //recieved from parent component => order
  @Output() onTotalPriceChanged: EventEmitter<number> //defining event as publisher ** output decorator used so subscriber can listen on it and use the changed value


  constructor(
    private _staticProductsService: StaticProductsService,
    private router: Router,
    private _apiProducts: ApiProductsService) { //dependency injection
    // this.products = this._staticProductsService.getAllProducts();

    this.filteredProducts = this.products ;
    this.onTotalPriceChanged = new EventEmitter<number>(); //initializing event
  }
  ngOnInit(): void {
    this._apiProducts.getAllProducts().subscribe({
      next: (res) => {
        this.products = res
        this.filteredProducts = this.products
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnChanges() {
    this._apiProducts.getProductByCatId(this.receivedCategoryId).subscribe({
      next: (res) => {
        this.filteredProducts = res
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  calculateTotalPrice(count:string , quantity:number){
    // this.totalOrderPrice = Number(count) * quantity ;
    // this.totalOrderPrice = + count * quantity ;
    this.totalOrderPrice += parseInt(count) * quantity ;
    this.onTotalPriceChanged.emit(this.totalOrderPrice);  //fire event

  }

  trackItem(index:number , item:Iproduct){
     return item.id
  }

  // filterProducts() {
  //   if (this.receivedCategoryId == 0){
  //     this.filteredProducts = this.products
  //   }
  //   else {
  //     this.filteredProducts = this.products.filter((prod => prod.catId == this.receivedCategoryId))
  //   }
  //   }

  //navigate to another component from ts without id
  // navigateToDetails(){
  //   this.router.navigateByUrl('/Details');
  //   this.router.navigate(['/Details']);
  // }

    //navigate to another component from ts with id
    navigateToDetails(id : number){
      this.router.navigateByUrl('/Details/${id}');
      // this.router.navigate(['/Details',id]);
    }

}
