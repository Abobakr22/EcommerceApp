import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe, Location } from '@angular/common';
import { MyCustomDirectiveDirective } from '../../directives/my-custom-directive.directive';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe, MyCustomDirectiveDirective],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  currentId: number = 0
  product: Iproduct | null = null

  ArrayOfIds: number[]
  CurrentIdIndex: number = 0

  constructor(private _activatedRoute: ActivatedRoute,
    private _staticProducts: StaticProductsService,
    private _location: Location,
    private _router: Router,
    private _apiProducts: ApiProductsService) {

    this.ArrayOfIds = this._staticProducts.mapProductsToIds();

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentId = Number(paramMap.get('id'))
      this._apiProducts.getProductById(this.currentId).subscribe({
        next: (res) => {
          this.product = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    });
  }

  GoBack() {
    this._location.back()
  }

  GoNext() {
    this.CurrentIdIndex = this.ArrayOfIds.findIndex((id) => id == this.currentId);
    if (this.CurrentIdIndex != this.ArrayOfIds.length - 1) {
      this._router.navigateByUrl(`/Details/${this.ArrayOfIds[this.CurrentIdIndex + 1]}`);
    }
  }


  GoPrevious() {
    this.CurrentIdIndex = this.ArrayOfIds.findIndex((id) => id == this.currentId);
    if (this.CurrentIdIndex != 0) {
      this._router.navigateByUrl(`/Details/${this.ArrayOfIds[this.CurrentIdIndex - 1]}`);
    }
  }

}
