import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule , CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {

  categories: Icategory[];
  selectedCategoryId: number = 0 ;

  receivedTotalPrice: number = 0 ;

  @ViewChild('UserNameInput') myInput!: ElementRef     // ! => non null assertion operator ** view child is used to hold a reference in html file
  @ViewChild(ProductsComponent) productsComponentObj !: ProductsComponent  // hold an instance of the child component : product from parent component : order

  constructor(){
    this.categories = [
      {id:1, name:'Laptop'},
      {id:2, name:'Phone'},
      {id:3, name:'Tablet'}
    ]
  }
  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = 'Abobakr'
    console.log(this.productsComponentObj)
  }

  calculateTotalPrice(total:number){
    this.receivedTotalPrice = total
  }

}
