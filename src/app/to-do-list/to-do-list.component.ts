import { Component, OnInit } from '@angular/core';
import { Item } from './Item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDos: Item[] = [
    {
      nombre: 'Curso Angular',
      estado: 'In Progress',
      total: 8,
      realizado: 8
    },
    {
      nombre: 'Practica Interfaces',
      estado: 'Waiting',
      total: 180,
      realizado: 0
    },
    {
      nombre: 'Trabajo',
      estado: 'In Progress',
      total: 999,
      realizado: 100
    },

  ] 

  constructor(private cart: CartService) {
   }

  ngOnInit(): void {
  }

  limitar(tope: number): void {
    alert("se alcanzó el tope de: " + tope);
  }

  addToCart(item: Item): void{
    this.cart.addToCart(item);
  }
}
