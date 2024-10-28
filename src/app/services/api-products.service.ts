import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private _httpClient : HttpClient) { }

  getAllProducts() : Observable<Iproduct[]> {
   return this._httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id:number) : Observable<Iproduct> {
    return this._httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  //return array of products with the same category => so we use query string
  getProductByCatId(catId:number) : Observable<Iproduct[]> {
    return this._httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?catId=${catId}`)
  }

}
