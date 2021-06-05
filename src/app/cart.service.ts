import { Injectable } from '@angular/core';
import { Item } from './to-do-list/Item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList: Item[] = [];
  cartList: BehaviorSubject<Item[]> = new BehaviorSubject(this._cartList);

  addToCart(item: Item) {
    let elem: Item | undefined = this._cartList.find((v1) => v1.nombre == item.nombre);
    if (elem){
      elem.actual += item.actual;
    }
    else {
      this._cartList.push({...item});
    }
    console.log("carga realizada");
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  
  }

  constructor() { }
}
