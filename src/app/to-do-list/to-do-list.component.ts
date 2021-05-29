import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

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

  constructor() { }

  ngOnInit(): void {
  }

  downTime(item: Item): void{
    if (item.realizado > 0){
      item.realizado--;
    }
  }

  upTime(item: Item): void{
    if (item.total > item.realizado) {
      item.realizado++;
    }
  }
}
