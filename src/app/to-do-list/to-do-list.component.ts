import { Component, OnInit } from '@angular/core';
import { Item } from './Item';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  
  toDoList$: Observable<Item[]>;
  constructor(private cart: CartService) {
    this.toDoList$ = cart.toDoList.asObservable();
  }

  ngOnInit(): void {
  }

  limitar(tope: number): void {
    alert("se alcanzó el tope de: " + tope);
  }

  addToCart(item: Item): void{
    this.cart.addToCart(item);
    item.realizado += item.actual;
    item.actual = 0;
  }
}
