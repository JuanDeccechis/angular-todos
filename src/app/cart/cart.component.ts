import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../to-do-list/Item';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Item[]>;
  constructor(private cart: CartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  removeToCart(item: Item): void{
    item.actual = 0;
  }
}
