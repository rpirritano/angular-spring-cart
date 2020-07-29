import { Injectable } from '@angular/core';
//import { OrderItem } from '../common/order-confirmation';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  //orderItems: OrderItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

}
