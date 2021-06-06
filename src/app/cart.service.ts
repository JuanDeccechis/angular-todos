import { Injectable } from '@angular/core';
import { Item } from './to-do-list/Item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _toDoList: Item[] = [
    {
      nombre: 'Curso Angular',
      estado: 'In Progress',
      total: 8,
      realizado: 8,
      actual: 0
    },
    {
      nombre: 'Practica Interfaces',
      estado: 'Waiting',
      total: 180,
      realizado: 0,
      actual: 0
    },
    {
      nombre: 'Trabajo',
      estado: 'In Progress',
      total: 999,
      realizado: 100,
      actual: 0
    },

  ]
  toDoList: BehaviorSubject<Item[]> = new BehaviorSubject(this._toDoList);
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
    this.cartList.next(this._cartList);
  
  }

  removeFromCart(item: Item) {
    let elemToDo: Item | undefined = this._toDoList.find((v1) => v1.nombre == item.nombre);
    let elemCart: Item | undefined = this._cartList.find((v1) => v1.nombre == item.nombre);
    if (elemToDo){
      elemToDo.realizado -= item.actual;
      if (elemCart){ 
        let index = this._cartList.indexOf(elemCart);
        this._cartList.splice(index, 1);
        console.log("carga deshecha")
      }
    }
    else {
      console.log("elemento no encontrado");
    };
    this.toDoList.next(this._toDoList);
    this.cartList.next(this._cartList);
  
  }

  constructor() { }
}
