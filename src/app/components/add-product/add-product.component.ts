import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
   categories : Icategory []
   newProduct : Iproduct = {} as Iproduct ;

  constructor(private _apiProductServ : ApiProductsService,
    private _router : Router
  ){

   this.categories = [
      {
        id: 1,
        name: "Laptop"
      },
      {
        id: 2,
        name: "Phone"
      },
      {
        id: 3,
        name: "Tablet"
      }
    ]

  }

  addNewProduct () {
    this._apiProductServ.addProduct(this.newProduct).subscribe({
      next : () => {
        alert('Done')
        this._router.navigateByUrl('/products')
      },
      error : (err) => {
            console.log(err)
      }
    })
  }
}
