import { Injectable } from '@angular/core';
import { Item } from './to-do-list/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: Item[] = [];

  addToCart(item: Item) {
    let elem: Item | undefined = this.cartList.find((v1) => v1.nombre == item.nombre);
    if (elem){
      elem.realizado += item.realizado;
    }
    else {
      this.cartList.push({...item});
    }

    console.log(this.cartList);
  
  }

  constructor() { }
}
