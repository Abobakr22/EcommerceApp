import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  products: Iproduct[];

  constructor() {
    this.products = [
      {id:100, name:'Dell lap',    price:10000, quantity:3, imgUrl:'https://fakeimg.pl/300/', catId:1},
      {id:200, name:'HP lap'  ,    price:50000, quantity:0, imgUrl:'https://fakeimg.pl/300/', catId:1},
      {id:300, name:'Asus lap',    price:60000, quantity:3, imgUrl:'https://fakeimg.pl/300/', catId:1},
      {id:400, name:'Iphone'  ,    price:75000, quantity:2, imgUrl:'https://fakeimg.pl/300/', catId:2},
      {id:500, name:'Samsung ',    price:40000, quantity:1, imgUrl:'https://fakeimg.pl/300/', catId:2},
      {id:600, name:'Lenovo tab',  price:80000, quantity:4, imgUrl:'https://fakeimg.pl/300/', catId:3},
      {id:700, name:'Samsung tab', price:10000, quantity:5, imgUrl:'https://fakeimg.pl/300/', catId:3},
    ];
   }

   getAllProducts() : Iproduct[] {
   return  this.products
   }

   getProductById(id : number) : Iproduct | null {
    let product =  this.products.find((prod)=> prod.id == id) ;
    return product ? product : null ;
   }

   getProductsByCategoryId(catId : number): Iproduct[] {
    if (catId == 0) {
      return this.products
    }
    else {
      return this.products.filter((prod)=> prod.catId == catId)
    }
   }

   //method used to return array of product ids
   mapProductsToIds(): number[]{
    return this.products.map((prod)=> prod.id)
   }
}
